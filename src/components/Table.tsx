import React from 'react';
import { findElement, getAvailableLength } from '../utils';
import { TimeSlot, User } from '../index.d';

type TableProps = {
  timeSlots: Array<TimeSlot>
  users: Array<User>
  // eslint-disable-next-line no-unused-vars
  onSelect: (i: number) => void
}

const Table = ({
  timeSlots,
  users,
  onSelect,
}: TableProps) => (
  <table>
    <thead>
      <tr>
        <th>
          Horario
        </th>
        <th>
          Motociclista
        </th>
        <th>
          Usuario
        </th>
      </tr>
    </thead>
    <tbody>
      {timeSlots.map((slot, index) => (
        <tr
          key={index}
          className={`Table__Row${getAvailableLength(slot.motorcyclists) > 0 ? ' available' : ' full'}`}
          onClick={() => onSelect(index)}
        >
          <td>{slot.time}</td>
          <td>{`${8 - getAvailableLength(slot.motorcyclists)} Asignados`}</td>
          <td>{slot.users.map((user) => `${findElement(users, user).name}, `)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
