import {
  TimeSlot,
  Motorcyclist,
  User,
  Notification,
} from './index.d';

const baseMotorcyclists: ReadonlyArray<Motorcyclist> = [
  {
    id: 1,
    available: true,
    name: 'Motociclista 1',
  },
  {
    id: 2,
    available: true,
    name: 'Motociclista 2',
  },
  {
    id: 3,
    available: true,
    name: 'Motociclista 3',
  },
  {
    id: 4,
    available: true,
    name: 'Motociclista 4',
  },
  {
    id: 5,
    available: true,
    name: 'Motociclista 5',
  },
  {
    id: 6,
    available: true,
    name: 'Motociclista 6',
  },
  {
    id: 7,
    available: true,
    name: 'Motociclista 7',
  },
  {
    id: 8,
    available: true,
    name: 'Motociclista 8',
  },
];

const createMotorcyclistRoster = (): Array<Motorcyclist> => baseMotorcyclists.map((motorcyclist) => ({
  ...motorcyclist,
}));

const timeSlotsTimeline: ReadonlyArray<string> = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];

export const motorcyclistsList: Array<Motorcyclist> = createMotorcyclistRoster();

export const timeSlotsList: Array<TimeSlot> = timeSlotsTimeline.map((time) => ({
  time,
  motorcyclists: createMotorcyclistRoster(),
  users: [],
}));

export const usersList: Array<User> = [
  {
    id: 1,
    name: 'Usuario 1',
  },
  {
    id: 2,
    name: 'Usuario 2',
  },
  {
    id: 3,
    name: 'Usuario 3',
  },
  {
    id: 4,
    name: 'Usuario 4',
  },
  {
    id: 5,
    name: 'Usuario 5',
  },
  {
    id: 6,
    name: 'Usuario 6',
  },
  {
    id: 7,
    name: 'Usuario 7',
  },
  {
    id: 8,
    name: 'Usuario 8',
  },
];

export const initialNotification: Notification = {
  message: 'Bienvenido',
  type: 'info',
};
