import {IAuthenticationState} from '../type/authentication';
import {IRootState} from '../type/store';

const selectAuthState = (state: IRootState): IAuthenticationState => {
  return state.authenticationState;
};

export const selectAccessToken = (state: IRootState) => {
  return selectAuthState(state).token;
};
