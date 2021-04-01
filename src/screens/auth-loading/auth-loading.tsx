import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {getAccessTokenAction} from '../../action/authenticate';
import {SCREEN_NAME} from '../../navigation';
import {IRootState} from '../../type/store';
import {isEmpty} from '../../util/string';

export const AuthLoading = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {token} = useSelector((state: IRootState) => state.authenticationState);

  useEffect(() => {
    if (isEmpty(token)) {
      dispatch(getAccessTokenAction());
    } else {
      navigation.push(SCREEN_NAME.SENSOR);
    }
  }, [token]);

  return (
    <SafeAreaView>
      <ActivityIndicator />
      {isEmpty(token) && <Text>Couldn't get access token</Text>}
    </SafeAreaView>
  );
};
