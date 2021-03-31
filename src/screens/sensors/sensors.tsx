import React from 'react';
import {Text, View} from 'react-native';
import {useAuthentication} from '../../hooks/authentication';

export const Sensors = () => {
  const token = useAuthentication();
  return (
    <View>
      <Text>{token || 'No TOKEN'}</Text>
    </View>
  );
};
