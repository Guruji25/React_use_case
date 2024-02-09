// reducers/carReducer.ts
import { ADD_CAR_BRANDS } from '../actions/types';

interface CarBrand {
  name: string;
  image: string;
  id: string;
}

interface Action {
  type: string;
  payload: CarBrand[];
}

const initialState: CarBrand[] = [];

const carReducer = (state = initialState, action: Action) => {
  console.log("State ", state)
  console.log("action ", action.type)
  console.log("action ", action.payload)
  switch (action.type) {
    case ADD_CAR_BRANDS:
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
