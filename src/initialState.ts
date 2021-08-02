import {
  TimeSlot,
  Motorcyclist,
  User,
  Notification,
} from './index.d';

export const motorcyclistsList: Array<Motorcyclist> = [
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

export const timeSlotsList: Array<TimeSlot> = [
  {
    time: '08:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '08:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '09:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '09:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '10:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '10:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '11:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '11:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '12:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '12:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '13:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '13:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '14:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '14:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '15:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '15:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '16:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '16:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '17:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '17:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '18:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '18:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '19:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '19:30',
    motorcyclists: motorcyclistsList,
    users: [],
  },
  {
    time: '20:00',
    motorcyclists: motorcyclistsList,
    users: [],
  },
];

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
  type: 'success',
};
