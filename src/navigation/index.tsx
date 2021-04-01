import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthLoading, SensorDetail, Sensors} from '../screens';

const Stack = createStackNavigator();

export enum SCREEN_NAME {
  SENSOR = 'SENSOR',
  SENSOR_DETAIL = 'SENSOR_DETAIL',
  AUTH_LOADING = 'AUTH_LOADING',
}

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.AUTH_LOADING}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAME.SENSOR} component={Sensors} />
      <Stack.Screen name={SCREEN_NAME.SENSOR_DETAIL} component={SensorDetail} />
      <Stack.Screen name={SCREEN_NAME.AUTH_LOADING} component={AuthLoading} />
    </Stack.Navigator>
  </NavigationContainer>
);
