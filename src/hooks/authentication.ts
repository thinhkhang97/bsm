import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../type/store';
import {getAccessTokenAction} from '../action/authenticate';
import {isEmpty} from '../util/string';

export const useAuthentication = (): string => {
  const dispatch = useDispatch();
  const {token} = useSelector((state: IRootState) => state.authenticationState);
  useEffect(() => {
    if (isEmpty(token)) {
      dispatch(getAccessTokenAction());
    }
  }, []);
  return token;
};
