import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR} from '../../assets/theme';
import {ISensor} from '../../type/sensor';

interface Props {
  data: ISensor;
  onPress?: (data: ISensor) => void;
}

export const SensorItem: React.FC<Props> = ({data, onPress}) => {
  const {deviceId, name, serial} = data;
  const handlePress = React.useCallback(() => {
    onPress && onPress(data);
  }, [data]);
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>{deviceId}</Text>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{serial}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
