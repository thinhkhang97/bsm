import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {getSensorAction} from '../../action/sensor';
import {SCREEN_NAME} from '../../navigation';
import {selectSensorsWithIoT} from '../../selectors/sensor';
import {FlatList} from 'react-native-gesture-handler';
import {ISensor} from '../../type/sensor';

export const Sensors = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const sensors = useSelector(selectSensorsWithIoT);

  useEffect(() => {
    dispatch(getSensorAction());
  }, []);

  const renderItem = ({item}: {item: ISensor}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const keyExtractor = (item: ISensor) => `list_sensors_item_${item.deviceId}`;

  return (
    <SafeAreaView>
      <FlatList
        data={sensors}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};
