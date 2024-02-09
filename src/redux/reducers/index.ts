// reducers/index.ts
import { combineReducers } from 'redux';
import carReducer from './carReducer';
import carDetailReducer from './carDetailReducers';

const rootReducer = combineReducers({
  carBrands: carReducer,
  carDetail: carDetailReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
