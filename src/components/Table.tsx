import React from 'react';
import {
  TimeSlot,
  Motorcyclist,
  User,
  findElement,
} from '../App';

type TableProps = {
  timeSlots: Array<TimeSlot>
  motorcyclists: Array<Motorcyclist>
  users: Array<User>
  // eslint-disable-next-line no-unused-vars
  onSelect: (i: number) => void
}

const Table = ({
  timeSlots,
  motorcyclists,
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
      {timeSlots.map(({ time, motorcyclist, user }, index) => (
        <tr
          key={index}
          className={`Table__Row${motorcyclist !== 0 ? ' assigned' : ''}`}
          onClick={() => onSelect(index)}
        >
          <td>{time}</td>
          <td>{findElement(motorcyclists, motorcyclist).name}</td>
          <td>{findElement(users, user).name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
