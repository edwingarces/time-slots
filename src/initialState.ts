import {
  TimeSlot,
  Motorcyclist,
  User,
  Notification,
} from './App';

export const timeSlotsList: Array<TimeSlot> = [
  {
    time: '08:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '08:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '09:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '09:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '10:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '10:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '11:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '11:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '12:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '12:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '13:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '13:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '14:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '14:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '15:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '15:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '16:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '16:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '17:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '17:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '18:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '18:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '19:00',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '19:30',
    motorcyclist: 0,
    user: 0,
  },
  {
    time: '20:00',
    motorcyclist: 0,
    user: 0,
  },
];

export const motorcyclistsList: Array<Motorcyclist> = [
  {
    id: 0,
    available: false,
    name: 'No asignado',
  },
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

export const usersList: Array<User> = [
  {
    id: 0,
    name: 'No asignado',
    selected: false,
  },
  {
    id: 1,
    name: 'Usuario 1',
    selected: true,
  },
  {
    id: 2,
    name: 'Usuario 2',
    selected: false,
  },
];

export const initialNotification: Notification = {
  message: 'Bienvenido',
  type: 'success',
};
