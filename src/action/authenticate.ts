import {
  AuthenticationActionEnum,
  AuthenticationActionType,
} from './type/authenticate';

export const getAccessTokenAction = (): AuthenticationActionType => {
  return {
    type: AuthenticationActionEnum.GET_ACCESS_TOKEN,
  };
};

export const setAccessTokenAction = (
  token: string,
): AuthenticationActionType => {
  return {
    token,
    type: AuthenticationActionEnum.SET_ACCESS_TOKEN,
  };
};
