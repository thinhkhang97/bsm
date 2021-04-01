import {IAuthenticationState} from './authentication';
import {ISensorState} from './sensor';

export interface IRootState {
  authenticationState: IAuthenticationState;
  sensorState: ISensorState;
}
