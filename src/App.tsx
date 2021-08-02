import React, { useState, useEffect } from 'react';
import Message from './components/Message';
import Table from './components/Table';
import { timeSlotsList, usersList, initialNotification } from './initialState';
import { TimeSlot, Motorcyclist, Notification } from './index.d';
import { findElementIndex } from './utils';

const App = () => {
  const [timeSlots, setTimeSlots] = useState<Array<TimeSlot>>(timeSlotsList);
  const users = usersList;
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('08:00');
  const [
    motorcyclists,
    setMotorcyclists,
  ] = useState<Array<Motorcyclist>>(timeSlots[0].motorcyclists);
  const [notification, setNotification] = useState<Notification>(initialNotification);

  const assignTimeSlot = (index: number) => {
    const immutableTimeSlots = [...timeSlots];
    const immutableMotorcyclists = [...immutableTimeSlots[index].motorcyclists];
    const availableMotorcyclists = immutableMotorcyclists.filter(({ available }) => available);
    const firstAvailable = availableMotorcyclists.pop();
    const firstAvailableIndex = findElementIndex(immutableMotorcyclists, firstAvailable?.id);
    const slotUsers = [...immutableTimeSlots[index].users];
    slotUsers.push(selectedUser);
    immutableMotorcyclists[firstAvailableIndex] = {
      ...immutableMotorcyclists[firstAvailableIndex],
      available: false,
    };
    immutableTimeSlots[index] = {
      ...immutableTimeSlots[index],
      motorcyclists: immutableMotorcyclists,
      users: slotUsers,
    };
    setTimeSlots(immutableTimeSlots);
    setMotorcyclists(immutableMotorcyclists);
  };

  const unassignTimeSlot = (index: number) => {
    const immutableTimeSlots = [...timeSlots];
    const immutableMotorcyclists = [...immutableTimeSlots[index].motorcyclists];
    const notAvailableMotorcyclists = immutableMotorcyclists.filter(({ available }) => !available);
    const firstNotAvailableMotorcyclists = notAvailableMotorcyclists.pop();
    const motorcyclistIndex = findElementIndex(
      immutableMotorcyclists,
      firstNotAvailableMotorcyclists?.id,
    );
    const slotUsers = immutableTimeSlots[index].users.filter((user) => user !== selectedUser);
    immutableMotorcyclists[motorcyclistIndex] = {
      ...immutableMotorcyclists[motorcyclistIndex],
      available: true,
    };
    immutableTimeSlots[index] = {
      ...immutableTimeSlots[index],
      motorcyclists: immutableMotorcyclists,
      users: slotUsers,
    };
    setTimeSlots(immutableTimeSlots);
    setMotorcyclists(immutableMotorcyclists);
  };

  const handleSelect = (index: number) => {
    const immutableTimeSlots = [...timeSlots];
    setSelectedTimeSlot(immutableTimeSlots[index].time);
    setMotorcyclists(immutableTimeSlots[index].motorcyclists);
    const availableMotorcyclists = immutableTimeSlots[index].motorcyclists.filter(
      ({ available }) => available,
    );
    const userInSlot = immutableTimeSlots[index].users.filter((user) => user === selectedUser);
    const isPossibleToAssign = availableMotorcyclists.length && !userInSlot.length;
    const isPossibleToUnassign = availableMotorcyclists.length < 8
    && userInSlot.length;
    if (isPossibleToUnassign) {
      unassignTimeSlot(index);
      setNotification({
        message: 'Se liberó un motociclista',
        type: 'success',
      });
    } else if (isPossibleToAssign) {
      assignTimeSlot(index);
      setNotification({
        message: 'Se asignó un motociclista',
        type: 'success',
      });
    } else if (!availableMotorcyclists.length) {
      setNotification({
        message: 'No hay más motociclistas disponibles',
        type: 'danger',
      });
    }
  };

  const handleSelectUser = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = target;
    setSelectedUser(parseInt(value, 10));
    setNotification({
      message: 'Cambio de usuario',
      type: 'success',
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification({
        ...notification,
        type: 'out',
      });
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;
    if (notification.type !== 'out') {
      timeout = setTimeout(() => {
        setNotification({
          ...notification,
          type: 'out',
        });
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  return (
    <div className="App">
      <div className="App__Header">
        <h1>Tramos horarios</h1>
        <h2>Seleccione un usuario</h2>
        <select
          name="users"
          id="users"
          value={selectedUser}
          onChange={handleSelectUser}
        >
          {users.map(({ id, name }, index) => {
            if (id !== 0) return <option key={index} value={id}>{name}</option>;
            return null;
          })}
        </select>
      </div>
      <div className="App__AssignmentSection">
        <Table
          timeSlots={timeSlots}
          users={users}
          onSelect={handleSelect}
        />
        {motorcyclists
          ? (
            <div className="App__Motorcyclists">
              <h4>{`Motociclistas de las ${selectedTimeSlot}`}</h4>
              {motorcyclists.map(({ name, available }, index) => (
                <p key={index}>
                  {name}
                  {available ? ' Libre' : ' Asignado'}
                </p>
              ))}
            </div>
          )
          : null}
      </div>
      <Message
        message={notification.message}
        className={notification.type}
      />
    </div>
  );
};

export default App;
