import {put, takeEvery} from 'redux-saga/effects';
import {AuthenticationActionEnum} from '../action/type/authenticate';
import {API_KEY} from '../config';
import {authenticationService} from '../services';
import {IAuthenticateResult} from '../services/authentication-service';
import {setAccessTokenAction} from '../action/authenticate';

function* getAccessToken() {
  try {
    const result: IAuthenticateResult = yield authenticationService.oauth(
      API_KEY,
    );
    const {access_token} = result;
    if (access_token) {
      yield put(setAccessTokenAction(access_token));
    }
  } catch {}
}

export function* authenticationSaga() {
  yield takeEvery(AuthenticationActionEnum.GET_ACCESS_TOKEN, getAccessToken);
}
