import {put, takeEvery} from '@redux-saga/core/effects';
import {
  deleteSuccessfullySensorAction,
  setSensorAction,
  updateSuccessfullySensorAction,
} from '../action/sensor';
import {
  DeleteSensorActionType,
  SensorActionTypeEnum,
  UpdateSensorActionType,
} from '../action/type/sensor';
import {sensorGQL} from '../graphql/sensor';
import {ISensor} from '../type/sensor';

function* getSensorWithIoT() {
  const sensors: ISensor[] = yield sensorGQL.getSensorsWithIoT();
  yield put(setSensorAction(sensors));
}

function* updateSensor(action: UpdateSensorActionType) {
  // @ts-ignore: Strange props, need to be fix later.
  delete action.sensor['__typename'];

  sensorGQL.updateSensor(action.sensor);
  yield put(updateSuccessfullySensorAction(action.sensor));
}

function* deleteSensor(action: DeleteSensorActionType) {
  // Call API to delete sensor
  sensorGQL.deleteSensors([action.deviceId]);
  yield put(deleteSuccessfullySensorAction(action.deviceId));
}

export function* sensorSaga() {
  yield takeEvery(SensorActionTypeEnum.GET_SENSOR_WITH_IOT, getSensorWithIoT);
  yield takeEvery(SensorActionTypeEnum.UPDATE_SENSOR, updateSensor);
  yield takeEvery(SensorActionTypeEnum.DELETE_SENSOR, deleteSensor);
}
