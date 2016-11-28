import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import talesReducer from './tales_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  tales: talesReducer
});

export default rootReducer;
