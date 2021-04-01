import {ISensor} from '../../type/sensor';

export enum SensorActionTypeEnum {
  GET_SENSOR_WITH_IOT = 'SENSOR_ACTION/GET_WITH_IOT',
  SET_SENSOR_WITH_IOT = 'SENSOR_ACTION/SET_WITH_IOT',
  UPDATE_SENSOR = 'SENSOR_ACTION/UPDATE',
  UPDATE_SUCCESSFULLY_SENSOR = 'SENSOR_ACTION/UPDATE_SUCCESSFULLY',
  DELETE_SENSOR = 'SENSOR_ACTION/DELETE',
  DELETE_SUCCESSFULLY_SENSOR = 'SENSOR_ACTION/DELETE_SUCCESSFULLY',
}

export type GetSensorActionType = {
  type: SensorActionTypeEnum.GET_SENSOR_WITH_IOT;
};

export type SetSensorActionType = {
  sensors: ISensor[];
  type: SensorActionTypeEnum.SET_SENSOR_WITH_IOT;
};

export type DeleteSensorActionType = {
  deviceId: number;
  type: SensorActionTypeEnum.DELETE_SENSOR;
};

export type DeleteSuccessfullySensorActionType = {
  deviceId: number;
  type: SensorActionTypeEnum.DELETE_SENSOR;
};

export type UpdateSensorActionType = {
  sensor: ISensor;
  type: SensorActionTypeEnum.UPDATE_SENSOR;
};

export type UpdateSuccessfullySensorActionType = {
  sensor: ISensor;
  type: SensorActionTypeEnum.UPDATE_SENSOR;
};

export type SensorActionType =
  | GetSensorActionType
  | SetSensorActionType
  | DeleteSensorActionType
  | DeleteSuccessfullySensorActionType
  | UpdateSensorActionType
  | UpdateSuccessfullySensorActionType;
