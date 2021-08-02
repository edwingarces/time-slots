import {
  Motorcyclist,
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
