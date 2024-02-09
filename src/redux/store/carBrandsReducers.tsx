import { AnyAction } from "redux";

const initialState: CarBrand[] = [];

export interface CarBrand {
  map(arg0: (brand: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: string;
  name: string;
  image: string;
}

const carBrandsReducer = (state = initialState, action: AnyAction): CarBrand[] => {
  switch (action.type) {
    case 'SET_CAR_BRANDS':
      return action.payload;
    default:
      return state;
  }
};

export default carBrandsReducer;