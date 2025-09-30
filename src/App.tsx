import React, { useMemo, useState } from 'react';
import CalendarView from './components/CalendarView';
import Header, { FilterStatus, ViewMode } from './components/Header';
import SchedulerGrid from './components/SchedulerGrid';
import Sidebar from './components/Sidebar';
import Toast from './components/Toast';
import useTimeSlots from './hooks/useTimeSlots';
import { usersList } from './initialState';
import { downloadJsonFile } from './utils';

const App = () => {
  const {
    timeSlots,
    selectedUser,
    selectedSlot,
    selectedSlotTime,
    notification,
    history,
    selectUser,
    handleSlotInteraction,
    dismissNotification,
  } = useTimeSlots();

  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSlots = useMemo(() => {
    if (!searchTerm && filterStatus === 'all') {
      return timeSlots;
    }

    return timeSlots.filter((slot) => {
      const matchesSearch = slot.time.toLowerCase().includes(searchTerm.toLowerCase());
      if (filterStatus === 'all') {
        return matchesSearch;
      }
      const assignedCount = slot.motorcyclists.length - slot.motorcyclists.filter((motorcyclist) => motorcyclist.available).length;
      const total = slot.motorcyclists.length;
      if (filterStatus === 'available') {
        return matchesSearch && assignedCount === 0;
      }
      if (filterStatus === 'assigned') {
        return matchesSearch && assignedCount > 0 && assignedCount < total;
      }
      if (filterStatus === 'full') {
        return matchesSearch && assignedCount === total;
      }
      return matchesSearch;
    });
  }, [filterStatus, searchTerm, timeSlots]);

  const handleExport = () => {
    downloadJsonFile(timeSlots, `asignaciones-${new Date().toISOString()}.json`);
  };

  return (
    <div className={`app-shell${isDarkMode ? ' theme-dark' : ''}`}>
      <Header
        users={usersList}
        selectedUser={selectedUser}
        onSelectUser={selectUser}
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((current) => !current)}
        onExport={handleExport}
      />
      <main className="app-main">
        <section className="app-content">
          {viewMode === 'grid' ? (
            <SchedulerGrid
              timeSlots={filteredSlots}
              users={usersList}
              selectedUser={selectedUser}
              onSelect={handleSlotInteraction}
            />
          ) : (
            <CalendarView
              timeSlots={filteredSlots}
              selectedUser={selectedUser}
              onSelect={handleSlotInteraction}
            />
          )}
        </section>
        <Sidebar selectedSlot={selectedSlot} selectedTime={selectedSlotTime} history={history} />
      </main>
      {notification.type !== 'out' ? (
        <Toast
          message={notification.message}
          type={notification.type}
          onDismiss={dismissNotification}
        />
      ) : null}
    </div>
  );
};

export default App;
