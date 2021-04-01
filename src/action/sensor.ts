import {ISensor} from '../type/sensor';
import {SensorActionType, SensorActionTypeEnum} from './type/sensor';

export const getSensorAction = (): SensorActionType => {
  return {
    type: SensorActionTypeEnum.GET_SENSOR_WITH_IOT,
  };
};

export const setSensorAction = (sensor: ISensor): SensorActionType => {
  return {
    sensor,
    type: SensorActionTypeEnum.SET_SENSOR_WITH_IOT,
  };
};
