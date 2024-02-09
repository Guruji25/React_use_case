// actions/carActions.ts
import { ADD_CAR_BRANDS } from './types';

export const addCarBrands = (carBrands: any[]) => ({
  type: ADD_CAR_BRANDS,
  payload: carBrands,
});
