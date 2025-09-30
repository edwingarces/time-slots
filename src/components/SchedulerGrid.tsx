import React from 'react';
import { TimeSlot, User } from '../index.d';
import { getSlotStatus, isUserAssignedToSlot } from '../utils';

type SchedulerGridProps = {
  timeSlots: Array<TimeSlot>
  users: Array<User>
  selectedUser: number
  onSelect: (slotTime: string) => void
};

const SchedulerGrid = ({
  timeSlots,
  users,
  selectedUser,
  onSelect,
}: SchedulerGridProps) => (
  <section className="scheduler-grid" aria-label="Listado de horarios disponibles">
    <header className="scheduler-grid__header">
      <span>Horario</span>
      <span>Disponibilidad</span>
      <span>Usuarios asignados</span>
    </header>
    <div className="scheduler-grid__body">
      {timeSlots.map((slot) => {
        const status = getSlotStatus(slot);
        const isOwnedByUser = isUserAssignedToSlot(slot, selectedUser);
        const assignedUsers = slot.users
          .map((userId) => users.find((user) => user.id === userId)?.name)
          .filter(Boolean);

        return (
          <button
            key={slot.time}
            type="button"
            className={`scheduler-grid__row scheduler-grid__row--${status}${isOwnedByUser ? ' is-user-owned' : ''}`}
            onClick={() => onSelect(slot.time)}
            aria-pressed={isOwnedByUser}
          >
            <span className="scheduler-grid__cell scheduler-grid__cell--time">{slot.time}</span>
            <span className="scheduler-grid__cell scheduler-grid__cell--availability">
              {`${slot.motorcyclists.length - slot.motorcyclists.filter((moto) => moto.available).length} / ${slot.motorcyclists.length}`}
            </span>
            <span className="scheduler-grid__cell scheduler-grid__cell--users">
              {assignedUsers.length ? assignedUsers.join(', ') : 'Sin asignaciones'}
            </span>
          </button>
        );
      })}
    </div>
  </section>
);

export default SchedulerGrid;

