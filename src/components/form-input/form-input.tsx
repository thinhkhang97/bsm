import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {COLOR} from '../../assets/theme';

interface Props {
  title: string;
  name?: string;
  value?: string;
  disable?: boolean;
  onChangeText?: ({value, name}: {value: string; name?: string}) => void;
}

export const FormInput: React.FC<Props> = ({
  title,
  name,
  value,
  disable,
  onChangeText,
}) => {
  const handleChange = (text: string) => {
    onChangeText && onChangeText({value: text, name});
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.label, disable && styles.disable]}>{title}</Text>
      <TextInput
        editable={!disable}
        style={[styles.input, disable && styles.disable]}
        value={value}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    color: COLOR.blue,
    fontWeight: '700',
    fontSize: 16,
  },
  input: {
    color: COLOR.black,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.cyan,
    includeFontPadding: false,
  },
  disable: {
    color: 'gray',
  },
});
