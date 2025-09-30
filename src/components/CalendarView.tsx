import React from 'react';
import { TimeSlot } from '../index.d';
import { getSlotStatus, isUserAssignedToSlot } from '../utils';

type CalendarViewProps = {
  timeSlots: Array<TimeSlot>
  selectedUser: number
  onSelect: (time: string) => void
};

const CalendarView = ({
  timeSlots,
  selectedUser,
  onSelect,
}: CalendarViewProps) => (
  <section className="calendar-view" aria-label="Vista calendario de horarios">
    <div className="calendar-grid">
      {timeSlots.map((slot) => {
        const status = getSlotStatus(slot);
        const isOwnedByUser = isUserAssignedToSlot(slot, selectedUser);
        const isDisabled = status === 'full' && !isOwnedByUser;

        return (
          <button
            key={slot.time}
            type="button"
            className={`calendar-card calendar-card--${status}${isOwnedByUser ? ' is-user-owned' : ''}`}
            onClick={() => onSelect(slot.time)}
            aria-pressed={isOwnedByUser}
            aria-disabled={isDisabled}
            disabled={isDisabled}
          >
            <span className="calendar-card__time">{slot.time}</span>
            <span className="calendar-card__availability">
              {`${slot.motorcyclists.length - slot.motorcyclists.filter((moto) => moto.available).length}/${slot.motorcyclists.length}`}
            </span>
            <span className="calendar-card__status" data-status={status}>
              {status === 'available' && 'Disponible'}
              {status === 'assigned' && 'Con disponibilidad limitada'}
              {status === 'full' && 'Completo'}
            </span>
          </button>
        );
      })}
    </div>
  </section>
);

export default CalendarView;

