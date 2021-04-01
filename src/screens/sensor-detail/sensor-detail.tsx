import {useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR} from '../../assets/theme';
import {FormInput} from '../../components';
import {ISensor} from '../../type/sensor';

export const SensorDetail = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const [data, setData] = useState<ISensor>();

  useEffect(() => {
    if (route.params) {
      setData(route.params as ISensor);
    }
  }, []);

  const handleChange = ({value, name}: {value: string; name?: string}) => {
    if (name) {
      setData({...data, [name]: value} as ISensor);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };
  if (!data) {
    return (
      <SafeAreaView>
        <Text>No Sensor Data</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <View style={styles.leftHeader}>
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.centerHeader}>
            <Text style={styles.title}>SENSOR DETAIL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rightHeader}>
            <Text style={styles.save}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <FormInput
            disable
            title="Device ID"
            value={`${data.deviceId}`}
            name="deviceId"
            onChangeText={handleChange}
          />
          <FormInput
            title="Name"
            value={`${data.name}`}
            name="name"
            onChangeText={handleChange}
          />
          <FormInput
            title="Serial"
            value={`${data.serial}`}
            name="serial"
            onChangeText={handleChange}
          />
          <FormInput
            title="MAC"
            value={`${data.mac}`}
            name="mac"
            onChangeText={handleChange}
          />
          <FormInput
            title="Region"
            value={`${data.region}`}
            name="region"
            onChangeText={handleChange}
          />
          <FormInput
            title="Longtitude"
            value={`${data.longitude}`}
            name="longtitude"
            onChangeText={handleChange}
          />
          <FormInput
            title="Latitude"
            value={`${data.latitude}`}
            name="latitude"
            onChangeText={handleChange}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  leftHeader: {
    width: 48,
  },
  centerHeader: {},
  rightHeader: {
    width: 48,
  },
  back: {
    textAlign: 'left',
  },
  title: {
    fontWeight: '600',
  },
  save: {
    color: COLOR.blue,
    fontWeight: '600',
    textAlign: 'right',
  },
});
