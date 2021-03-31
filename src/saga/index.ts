import {all, call} from '@redux-saga/core/effects';
import {authenticationSaga} from './authenticate';

export function* rootSaga() {
  yield all([call(authenticationSaga)]);
}
