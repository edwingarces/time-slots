import React from 'react';
import { HistoryEntry, Motorcyclist, TimeSlot } from '../index.d';
import { formatHistoryTimestamp, getAvailableLength } from '../utils';

type SidebarProps = {
  selectedSlot?: TimeSlot
  selectedTime: string
  history: Array<HistoryEntry>
};

const getMotorcyclistStatusLabel = (motorcyclist: Motorcyclist) => (
  motorcyclist.available ? 'Disponible' : 'Asignado'
);

const Sidebar = ({ selectedSlot, selectedTime, history }: SidebarProps) => (
  <aside className="sidebar" aria-label="Detalles del horario seleccionado">
    <section className="sidebar__section">
      <div className="sidebar__heading">
        <h2>{selectedTime}</h2>
        <p>{selectedSlot ? `${8 - getAvailableLength(selectedSlot.motorcyclists)} asignados` : 'Selecciona un horario para ver detalles.'}</p>
      </div>
      {selectedSlot ? (
        <ul className="motorcyclist-list">
          {selectedSlot.motorcyclists.map((motorcyclist) => (
            <li key={motorcyclist.id} className="motorcyclist-list__item">
              <div className="motorcyclist-list__info">
                <span className="motorcyclist-list__avatar" aria-hidden="true">
                  {motorcyclist.name.charAt(0)}
                </span>
                <div>
                  <p className="motorcyclist-list__name">{motorcyclist.name}</p>
                  <span className={`badge badge--${motorcyclist.available ? 'success' : 'error'}`}>
                    {getMotorcyclistStatusLabel(motorcyclist)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
    <section className="sidebar__section sidebar__section--history" aria-label="Historial de cambios">
      <div className="sidebar__heading">
        <h3>Historial</h3>
      </div>
      <ul className="history-list">
        {history.length ? history.map((entry) => (
          <li key={entry.id} className="history-list__item">
            <time dateTime={entry.timestamp}>{formatHistoryTimestamp(new Date(entry.timestamp))}</time>
            <p>{entry.message}</p>
          </li>
        )) : (
          <li className="history-list__placeholder">Aún no hay eventos registrados.</li>
        )}
      </ul>
    </section>
  </aside>
);

export default Sidebar;

