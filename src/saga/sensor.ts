import {select, takeEvery} from '@redux-saga/core/effects';
import {SensorActionTypeEnum} from '../action/type/sensor';
import {selectAccessToken} from '../selectors/authentication';

export function* getSensorWithIoT() {
  try {
    const token: string = yield select(selectAccessToken);
    if (!!token) {
      // call to get sensor data
    }
  } catch {}
}

export function* sensorSaga() {
  yield takeEvery(SensorActionTypeEnum.GET_SENSOR_WITH_IOT, getSensorWithIoT);
}
