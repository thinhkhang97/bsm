import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../type/store';
import {getAccessTokenAction} from '../action/authenticate';

export const useAuthentication = (): string => {
  const dispatch = useDispatch();
  const {token} = useSelector((state: IRootState) => state.authenticationState);
  useEffect(() => {
    dispatch(getAccessTokenAction());
  }, []);
  return token;
};
