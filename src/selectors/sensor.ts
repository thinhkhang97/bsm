import {IRootState} from '../type/store';

const selectSensorState = (state: IRootState) => {
  return state.sensorState;
};

export const selectSensorsWithIoT = (state: IRootState) => {
  return selectSensorState(state).sensors;
};
