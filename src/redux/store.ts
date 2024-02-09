// import { createStore, applyMiddleware } from 'redux';
// import thunk, {withExtraArgument} from 'redux-thunk'; // Optional for async actions
// import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware());

// export default store;
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

const store = createStore(rootReducer);

export default store;