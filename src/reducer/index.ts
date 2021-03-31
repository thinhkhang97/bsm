import {combineReducers} from 'redux';
import {IRootState} from '../type/store';
import authenticationState from './authentication';

export const rootReducer = combineReducers<IRootState>({authenticationState});
