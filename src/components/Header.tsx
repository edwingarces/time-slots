import React, { memo } from 'react';
import { User } from '../index.d';

type ViewMode = 'grid' | 'calendar';

type FilterStatus = 'all' | 'available' | 'assigned' | 'full';

type HeaderProps = {
  users: Array<User>
  selectedUser: number
  onSelectUser: (value: number) => void
  filterStatus: FilterStatus
  onFilterChange: (value: FilterStatus) => void
  searchTerm: string
  onSearchChange: (value: string) => void
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  isDarkMode: boolean
  onToggleDarkMode: () => void
  onExport: () => void
};

const filterLabels: Record<FilterStatus, string> = {
  all: 'Todos',
  available: 'Disponibles',
  assigned: 'Asignados',
  full: 'Completos',
};

const viewModeLabels: Record<ViewMode, string> = {
  grid: 'Lista',
  calendar: 'Calendario',
};

const HeaderComponent = ({
  users,
  selectedUser,
  onSelectUser,
  filterStatus,
  onFilterChange,
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
  isDarkMode,
  onToggleDarkMode,
  onExport,
}: HeaderProps) => (
  <header className="app-header">
    <div className="app-header__titles">
      <h1>Gestión de horarios</h1>
      <p>Coordina la disponibilidad de motociclistas en tiempo real.</p>
    </div>
    <div className="app-header__controls" role="search">
      <div className="form-field">
        <label className="form-field__label" htmlFor="user-selector">Usuario</label>
        <div className="form-field__control">
          <span aria-hidden="true" className="form-field__icon" role="presentation">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0 2c-3.33 0-10 1.667-10 5v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-3.333-6.67-5-10-5Z" /></svg>
          </span>
          <select
            id="user-selector"
            name="user-selector"
            value={selectedUser}
            onChange={(event) => onSelectUser(parseInt(event.target.value, 10))}
          >
            {users.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label className="form-field__label" htmlFor="slot-search">Buscar horario</label>
        <div className="form-field__control">
          <span aria-hidden="true" className="form-field__icon" role="presentation">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M21 11.5A9.5 9.5 0 1 1 11.5 2a9.5 9.5 0 0 1 9.5 9.5Zm-9.5 5.5a5.5 5.5 0 1 0-5.5-5.5 5.5 5.5 0 0 0 5.5 5.5Zm6.707 1.293-3.258-3.258a7 7 0 1 0-1.414 1.414l3.258 3.258a1 1 0 0 0 1.414-1.414Z" /></svg>
          </span>
          <input
            id="slot-search"
            type="search"
            value={searchTerm}
            placeholder="Ej. 10:30"
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>
      </div>
      <div className="segmented-control" role="radiogroup" aria-label="Filtrar por disponibilidad">
        {(['all', 'available', 'assigned', 'full'] as Array<FilterStatus>).map((status) => (
          <button
            key={status}
            type="button"
            role="radio"
            aria-checked={filterStatus === status}
            className={`segmented-control__option${filterStatus === status ? ' is-active' : ''}`}
            onClick={() => onFilterChange(status)}
          >
            {filterLabels[status]}
          </button>
        ))}
      </div>
      <div className="view-toggle" role="radiogroup" aria-label="Cambiar vista">
        {(['grid', 'calendar'] as Array<ViewMode>).map((mode) => (
          <button
            key={mode}
            type="button"
            role="radio"
            aria-checked={viewMode === mode}
            className={`view-toggle__option${viewMode === mode ? ' is-active' : ''}`}
            onClick={() => onViewModeChange(mode)}
          >
            {viewModeLabels[mode]}
          </button>
        ))}
      </div>
      <div className="header-actions">
        <button
          type="button"
          className="button button--ghost"
          onClick={onToggleDarkMode}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? 'Modo claro' : 'Modo oscuro'}
        </button>
        <button
          type="button"
          className="button"
          onClick={onExport}
        >
          Exportar asignaciones
        </button>
      </div>
    </div>
  </header>
);

const Header = memo(HeaderComponent);

export type { FilterStatus, ViewMode };
export default Header;

