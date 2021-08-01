import React, { useState, useEffect } from 'react';
import Message from './components/Message';
import Table from './components/Table';
import {
  timeSlotsList,
  motorcyclistsList,
  usersList,
  initialNotification,
} from './initialState';

export type TimeSlot = {
  time: string
  motorcyclist: number | undefined
  user: number
}

export type Motorcyclist = {
  id: number
  available: boolean
  name: string
}

export type User = {
  id: number
  name: string
  selected: boolean
}

export type Notification = {
  message: string
  type: 'success' | 'danger' | 'warning' | 'out'
}

export const findElement = (
  array: Array<Motorcyclist | User>,
  searchId: number | undefined,
) => {
  const found = array.filter(({ id }) => id === searchId);
  return found[0];
};

export const findElementIndex = (
  array: Array<Motorcyclist | User>,
  searchId: number | undefined,
) => (
  array.findIndex(({ id }) => id === searchId)
);

export const App = () => {
  const [timeSlots, setTimeSlots] = useState<Array<TimeSlot>>(timeSlotsList);
  const [motorcyclists, setMotorcyclists] = useState<Array<Motorcyclist>>(motorcyclistsList);
  const [users, setUsers] = useState<Array<User>>(usersList);
  const [notification, setNotification] = useState<Notification>(initialNotification);

  const assignTimeSlot = (index: number) => {
    const immutableTimeSlots = [...timeSlots];
    const immutableMotorcyclists = [...motorcyclists];
    const availableMotorcyclists = motorcyclists.filter(({ available }) => available);
    const firstAvailable = availableMotorcyclists.pop();
    const firstAvailableIndex = findElementIndex(motorcyclists, firstAvailable?.id);
    const filterSelected = users.filter(({ selected }) => selected);
    const userSelected = filterSelected[0].id;
    immutableTimeSlots[index] = {
      ...immutableTimeSlots[index],
      motorcyclist: firstAvailable?.id,
      user: userSelected,
    };
    immutableMotorcyclists[firstAvailableIndex] = {
      ...immutableMotorcyclists[firstAvailableIndex],
      available: false,
    };
    setTimeSlots(immutableTimeSlots);
    setMotorcyclists(immutableMotorcyclists);
  };

  const unassignTimeSlot = (index: number) => {
    const immutableTimeSlots = [...timeSlots];
    const immutableMotorcyclists = [...motorcyclists];
    const currentMotorcyclist = findElement(
      motorcyclists,
      immutableTimeSlots[index].motorcyclist,
    );
    const motorcyclistIndex = findElementIndex(motorcyclists, currentMotorcyclist.id);
    immutableTimeSlots[index] = {
      ...immutableTimeSlots[index],
      motorcyclist: 0,
      user: 0,
    };
    immutableMotorcyclists[motorcyclistIndex] = {
      ...immutableMotorcyclists[motorcyclistIndex],
      available: true,
    };
    setTimeSlots(immutableTimeSlots);
    setMotorcyclists(immutableMotorcyclists);
  };

  const handleSelect = (index: number) => {
    const immutableTimeSlots = [...timeSlots];
    const availableMotorcyclists = motorcyclists.filter(({ available }) => available);
    const filterSelected = users.filter(({ selected }) => selected);
    const userSelected = filterSelected[0].id;
    const isPossibleToAssign = availableMotorcyclists.length
    && immutableTimeSlots[index].user === 0;
    const isPossibleToUnassign = immutableTimeSlots[index].motorcyclist !== 0
    && immutableTimeSlots[index].user === userSelected;
    if (isPossibleToUnassign) {
      unassignTimeSlot(index);
      setNotification({
        message: 'Se liberó el horario',
        type: 'success',
      });
    } else if (isPossibleToAssign) {
      assignTimeSlot(index);
      setNotification({
        message: 'Se tomó el horario',
        type: 'success',
      });
    } else if (!availableMotorcyclists.length) {
      setNotification({
        message: 'No hay más motociclistas disponibles',
        type: 'danger',
      });
    } else if (immutableTimeSlots[index].user !== userSelected) {
      setNotification({
        message: 'No se puede realizar la acción',
        type: 'warning',
      });
    }
  };

  const handleSelectUser = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = target;
    const filteredSelectedUsers = users.filter((user) => user.selected);
    const currentSelectedUser = filteredSelectedUsers[0];
    const selectedUserIndex = findElementIndex(users, currentSelectedUser.id);
    const userIndex = findElementIndex(users, parseInt(value, 10));
    const immutableUsers = [...users];
    immutableUsers[userIndex] = {
      ...immutableUsers[userIndex],
      selected: true,
    };
    immutableUsers[selectedUserIndex] = {
      ...immutableUsers[selectedUserIndex],
      selected: false,
    };
    setUsers(immutableUsers);
    setNotification({
      message: 'Cambio de usuario',
      type: 'success',
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setNotification({
        ...notification,
        type: 'out',
      });
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (notification.type !== 'out') {
      setTimeout(() => {
        setNotification({
          ...notification,
          type: 'out',
        });
      }, 2000);
    }
  }, [notification]);

  return (
    <div className="App">
      <div className="App__Header">
        <h1>Tramos horarios</h1>
        <h2>Seleccione un usuario</h2>
        <select name="users" id="users" onChange={handleSelectUser}>
          {users.map(({ id, name }, index) => {
            if (id !== 0) return <option key={index} value={id}>{name}</option>;
            return null;
          })}
        </select>
      </div>
      <div className="App__AssignmentSection">
        <Table
          timeSlots={timeSlots}
          motorcyclists={motorcyclists}
          users={users}
          onSelect={handleSelect}
        />
        <div className="App__Motorcyclists">
          <h2>Motociclistas</h2>
          {motorcyclists.map(({ id, name, available }) => (
            <>
              <p>
                {id !== 0 && name}
                {id !== 0 && (available ? ' Libre' : ' Asignado')}
              </p>
            </>
          ))}
        </div>
      </div>
      <Message
        message={notification.message}
        className={notification.type}
      />
    </div>
  );
};
