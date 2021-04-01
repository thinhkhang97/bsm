import gql from 'graphql-tag';
import {client} from '.';
import {ISensor} from '../type/sensor';

export const GET_SENSOR_WITH_IOT = gql`
  query GetSensor {
    getSensorsWithIoT {
      deviceId
      name
      serial
      mac
      region
      longitude
      latitude
    }
  }
`;

export const getSensorsWithIoT = async (): Promise<ISensor[]> => {
  try {
    const res = await client.query({query: GET_SENSOR_WITH_IOT});
    return res.data.getSensorsWithIoT;
  } catch {
    return [];
  }
};

export const UPDATE_SENSOR = gql`
  mutation UpdateDevice($input: DeviceUpdateInput) {
    updateDevice(input: $input) {
      deviceId
      name
      serial
      mac
      region
      longitude
      latitude
    }
  }
`;

export const updateSensor = async (
  sensor: ISensor,
): Promise<ISensor | undefined> => {
  try {
    const res = await client.mutate({
      mutation: UPDATE_SENSOR,
      variables: {input: sensor},
    });
    return res.data;
  } catch (e) {
    return;
  }
};

export const sensorGQL = {
  getSensorsWithIoT,
  updateSensor,
};
