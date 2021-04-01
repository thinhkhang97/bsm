import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {getSensorAction} from '../../action/sensor';
import {SCREEN_NAME} from '../../navigation';
import {selectSensorsWithIoT} from '../../selectors/sensor';
import {FlatList} from 'react-native-gesture-handler';
import {ISensor} from '../../type/sensor';
import {SensorItem} from '../../components';

export const Sensors = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const sensors = useSelector(selectSensorsWithIoT);

  useEffect(() => {
    dispatch(getSensorAction());
  }, []);

  const handlePressItem = (item: ISensor) => {
    navigation.navigate({name: SCREEN_NAME.SENSOR_DETAIL, params: item});
  };

  const renderItem = ({item}: {item: ISensor}) => {
    return <SensorItem data={item} onPress={handlePressItem} />;
  };

  const renderEmptyState = () => (
    <Text style={styles.emptyState}>LOADING LIST SENSORS...</Text>
  );

  const keyExtractor = (item: ISensor) => `list_sensors_item_${item.deviceId}`;

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>SENSOR LIST</Text>
        <Text>Region: ALL</Text>
      </View>
      <FlatList
        ListEmptyComponent={renderEmptyState}
        style={styles.list}
        data={sensors}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  emptyState: {
    textAlign: 'center',
  },
});
