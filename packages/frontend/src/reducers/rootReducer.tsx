import { combineReducers } from 'redux';
import authReducer from './authReducer';
import entriesReducer from './entriesReducer';

const rootReducer = combineReducers({
  authReducer,
  entriesReducer
});

export default rootReducer;
