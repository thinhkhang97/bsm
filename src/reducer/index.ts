import {combineReducers} from 'redux';
import {IRootState} from '../type/store';
import authenticationState from './authentication';
import sensorState from './sensor';

export const rootReducer = combineReducers<IRootState>({
  authenticationState,
  sensorState,
});
