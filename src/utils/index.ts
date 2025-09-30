import {
  Motorcyclist,
  TimeSlot,
  TimeSlotStatus,
  User,
} from '../index.d';

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

export const getAvailableLength = (
  array: Array<Motorcyclist>,
) => (
  array.filter((el) => el.available).length
);

export const getSlotStatus = (slot: TimeSlot): TimeSlotStatus => {
  const available = getAvailableLength(slot.motorcyclists);
  if (available === 0) {
    return 'full';
  }
  if (available === slot.motorcyclists.length) {
    return 'available';
  }
  return 'assigned';
};

export const isUserAssignedToSlot = (slot: TimeSlot, userId: number) => (
  slot.users.includes(userId)
);

export const formatHistoryTimestamp = (date: Date) => date.toLocaleString();

export const downloadJsonFile = (data: unknown, fileName: string) => {
  const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(jsonBlob);
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
