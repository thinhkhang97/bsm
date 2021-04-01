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
