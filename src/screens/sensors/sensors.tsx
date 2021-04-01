import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {getSensorAction} from '../../action/sensor';
import {SCREEN_NAME} from '../../navigation';

export const Sensors = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    dispatch(getSensorAction());
  }, []);

  const handlePress = () => {
    navigation.push(SCREEN_NAME.SENSOR_DETAIL);
  };

  return (
    <View>
      <Text>sensor list</Text>
      <Button title="to detail" onPress={handlePress} />
    </View>
  );
};
