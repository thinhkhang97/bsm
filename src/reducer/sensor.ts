import {SensorActionType, SensorActionTypeEnum} from '../action/type/sensor';
import {ISensor, ISensorState} from '../type/sensor';

const initState: ISensorState = {
  sensors: [],
};

const sensor = (state = initState, action: SensorActionType): ISensorState => {
  switch (action.type) {
    case SensorActionTypeEnum.SET_SENSOR_WITH_IOT: {
      return {...state, sensors: action.sensors};
    }
    case SensorActionTypeEnum.DELETE_SUCCESSFULLY_SENSOR: {
      return {
        ...state,
        sensors: state.sensors.filter(
          (s: ISensor) => s.deviceId !== action.deviceId,
        ),
      };
    }
    case SensorActionTypeEnum.UPDATE_SUCCESSFULLY_SENSOR: {
      const foundSensorIndex = state.sensors.findIndex(
        (s: ISensor) => s.deviceId === action.sensor.deviceId,
      );
      if (foundSensorIndex > -1) {
        const newSensors = [...state.sensors];
        newSensors[foundSensorIndex] = action.sensor;
        return {...state, sensors: newSensors};
      }
    }
    default:
      return state;
  }
};

export default sensor;
