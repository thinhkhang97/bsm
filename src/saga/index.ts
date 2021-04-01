import {all, call} from '@redux-saga/core/effects';
import {authenticationSaga} from './authenticate';
import {sensorSaga} from './sensor';

export function* rootSaga() {
  yield all([call(authenticationSaga), call(sensorSaga)]);
}
