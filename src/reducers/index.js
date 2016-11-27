import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import taleReducer from './tale_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  tale: taleReducer
});

export default rootReducer;
