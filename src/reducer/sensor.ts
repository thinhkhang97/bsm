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
    default:
      return state;
  }
};

export default sensor;
