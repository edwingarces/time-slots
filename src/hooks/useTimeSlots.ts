import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  HistoryEntry,
  Notification,
  TimeSlot,
} from '../index.d';
import {
  initialNotification,
  timeSlotsList,
  usersList,
} from '../initialState';
import {
  getAvailableLength,
  getSlotStatus,
  isUserAssignedToSlot,
} from '../utils';

const getUserName = (userId: number) => (
  usersList.find((user) => user.id === userId)?.name ?? `Usuario ${userId}`
);

const MAX_HISTORY_ENTRIES = 30;

const createHistoryEntry = (
  slotTime: string,
  userId: number,
  action: HistoryEntry['action'],
): HistoryEntry => {
  const verb = action === 'assign' ? 'reservó' : 'liberó';
  return {
    id: `${slotTime}-${userId}-${action}-${Date.now()}`,
    timestamp: new Date().toISOString(),
    message: `${getUserName(userId)} ${verb} el horario ${slotTime}`,
    slotTime,
    userId,
    action,
  };
};

const useTimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState<Array<TimeSlot>>(timeSlotsList);
  const [selectedUser, setSelectedUser] = useState<number>(usersList[0]?.id ?? 1);
  const [selectedSlotTime, setSelectedSlotTime] = useState<string>(timeSlotsList[0]?.time ?? '');
  const [notification, setNotification] = useState<Notification>(initialNotification);
  const [history, setHistory] = useState<Array<HistoryEntry>>([]);

  const selectedSlot = useMemo(
    () => timeSlots.find((slot) => slot.time === selectedSlotTime),
    [selectedSlotTime, timeSlots],
  );

  const showNotification = useCallback((message: string, type: Notification['type']) => {
    setNotification({
      message,
      type,
    });
  }, []);

  const handleSlotInteraction = useCallback((slotTime: string) => {
    const slotToUpdate = timeSlots.find((slot) => slot.time === slotTime);
    if (!slotToUpdate) {
      return;
    }

    setSelectedSlotTime(slotTime);

    const availableCount = getAvailableLength(slotToUpdate.motorcyclists);
    const userAssigned = isUserAssignedToSlot(slotToUpdate, selectedUser);

    if (!availableCount && !userAssigned) {
      showNotification('No hay más motociclistas disponibles', 'danger');
      return;
    }

    const motorcyclists = slotToUpdate.motorcyclists.map((motorcyclist) => ({ ...motorcyclist }));
    const users = userAssigned
      ? slotToUpdate.users.filter((user) => user !== selectedUser)
      : [...slotToUpdate.users, selectedUser];

    if (userAssigned) {
      const firstUnavailableIndex = motorcyclists.findIndex((motorcyclist) => !motorcyclist.available);
      if (firstUnavailableIndex >= 0) {
        motorcyclists[firstUnavailableIndex] = {
          ...motorcyclists[firstUnavailableIndex],
          available: true,
        };
      }
    } else {
      const firstAvailableIndex = motorcyclists.findIndex((motorcyclist) => motorcyclist.available);
      if (firstAvailableIndex >= 0) {
        motorcyclists[firstAvailableIndex] = {
          ...motorcyclists[firstAvailableIndex],
          available: false,
        };
      }
    }

    const status = getSlotStatus({
      ...slotToUpdate,
      motorcyclists,
      users,
    });

    const updatedSlot: TimeSlot = {
      ...slotToUpdate,
      motorcyclists,
      users,
    };

    setTimeSlots((previous) => previous.map((slot) => (
      slot.time === slotTime ? updatedSlot : slot
    )));

    const action: HistoryEntry['action'] = userAssigned ? 'unassign' : 'assign';
    const historyEntry = createHistoryEntry(slotTime, selectedUser, action);

    setHistory((previous) => [historyEntry, ...previous].slice(0, MAX_HISTORY_ENTRIES));

    if (status === 'full' && !userAssigned) {
      showNotification('El horario se completó', 'warning');
      return;
    }

    showNotification(
      userAssigned ? 'Se liberó un motociclista' : 'Se asignó un motociclista',
      'success',
    );
  }, [selectedUser, showNotification, timeSlots]);

  const selectUser = useCallback((userId: number) => {
    setSelectedUser(userId);
    showNotification(`Cambio a ${getUserName(userId)}`, 'success');
  }, [showNotification]);

  const dismissNotification = useCallback(() => {
    setNotification((current) => (current.type === 'out' ? current : {
      ...current,
      type: 'out',
    }));
  }, []);

  useEffect(() => {
    if (notification.type === 'out') {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setNotification((current) => ({
        ...current,
        type: 'out',
      }));
    }, 2400);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [notification]);

  return {
    timeSlots,
    selectedUser,
    selectedSlotTime,
    selectedSlot,
    notification,
    history,
    selectUser,
    handleSlotInteraction,
    dismissNotification,
  };
};

export default useTimeSlots;

