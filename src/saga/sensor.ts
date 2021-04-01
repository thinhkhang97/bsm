import {put, takeEvery} from '@redux-saga/core/effects';
import {setSensorAction} from '../action/sensor';
import {SensorActionTypeEnum} from '../action/type/sensor';
import {sensorGQL} from '../graphql/sensor';
import {ISensor} from '../type/sensor';

export function* getSensorWithIoT() {
  const sensors: ISensor[] = yield sensorGQL.getSensorsWithIoT();
  yield put(setSensorAction(sensors));
}

export function* sensorSaga() {
  yield takeEvery(SensorActionTypeEnum.GET_SENSOR_WITH_IOT, getSensorWithIoT);
}
