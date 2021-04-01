import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../assets/theme';
import {ISensor} from '../../type/sensor';

interface Props {
  data: ISensor;
}

export const SensorItem: React.FC<Props> = ({data}) => {
  const {deviceId, name, serial} = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{deviceId}</Text>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{serial}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    backgroundColor: COLOR.cyan,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: COLOR.black,
  },
});
