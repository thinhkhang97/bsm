import {
  AuthenticationActionEnum,
  AuthenticationActionType,
} from '../action/type/authenticate';
import {IAuthenticationState} from '../type/authentication';

const initState: IAuthenticationState = {
  token: '',
};

const authentication = (
  state = initState,
  action: AuthenticationActionType,
): IAuthenticationState => {
  switch (action.type) {
    case AuthenticationActionEnum.SET_ACCESS_TOKEN: {
      return {...state, token: action.token};
    }
    default:
      return state;
  }
};

export default authentication;
