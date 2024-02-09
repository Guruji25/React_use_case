import { UPDATE_CAR_DETAILS } from '../actions/types';

interface Car {
    modelName: string;
    location: string;
    color: string;
    yom: string;
    transmission: string;
    insDate: string;
    noOfOwner: number;
    exFitments: string;
    kms: string;

}

interface Action {
    type: string;
    payload: Partial<Car>;
  }

  const initialState: Car = {
    modelName: '',
    location: '',
    color: '',
    yom: '',
    transmission: '',
    insDate: '',
    noOfOwner: 0,
    exFitments: '',
    kms: '',
  };

  const carDetailReducer = (state = initialState, action: Action) => {
    console.log("State details", state)
    console.log("action ", action.type)
    console.log("action ", action.payload)
    switch (action.type) {
      case UPDATE_CAR_DETAILS:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default carDetailReducer;