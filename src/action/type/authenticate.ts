export enum AuthenticationActionEnum {
  GET_ACCESS_TOKEN = 'AUTHENTICATE/GET_ACCESS_TOKEN',
  SET_ACCESS_TOKEN = 'AUTHENTICATE/SET_ACCESS_TOKEN',
}

export type GetAccessTokenType = {
  type: AuthenticationActionEnum.GET_ACCESS_TOKEN;
};

export type SetAccessTokenType = {
  token: string;
  type: AuthenticationActionEnum.SET_ACCESS_TOKEN;
};

export type AuthenticationActionType = GetAccessTokenType | SetAccessTokenType;
