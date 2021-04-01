import {ISensor} from '../type/sensor';
import {SensorActionType, SensorActionTypeEnum} from './type/sensor';

export const getSensorAction = (): SensorActionType => {
  return {
    type: SensorActionTypeEnum.GET_SENSOR_WITH_IOT,
  };
};

export const setSensorAction = (sensors: ISensor[]): SensorActionType => {
  return {
    sensors,
    type: SensorActionTypeEnum.SET_SENSOR_WITH_IOT,
  };
};

export const deleteSensorAction = (deviceId: number): SensorActionType => {
  return {
    deviceId,
    type: SensorActionTypeEnum.DELETE_SENSOR,
  };
};

export const deleteSuccessfullySensorAction = (
  deviceId: number,
): SensorActionType => {
  return {
    deviceId,
    type: SensorActionTypeEnum.DELETE_SUCCESSFULLY_SENSOR,
  };
};

export const updateSensorAction = (sensor: ISensor): SensorActionType => {
  return {
    sensor,
    type: SensorActionTypeEnum.UPDATE_SENSOR,
  };
};

export const updateSuccessfullySensorAction = (
  sensor: ISensor,
): SensorActionType => {
  return {
    sensor,
    type: SensorActionTypeEnum.UPDATE_SUCCESSFULLY_SENSOR,
  };
};
