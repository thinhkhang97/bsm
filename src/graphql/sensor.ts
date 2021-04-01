import gql from 'graphql-tag';
import {client} from '.';
import {ISensor} from '../type/sensor';

export const GET_SENSOR_WITH_IOT = gql`
  query MyQuery {
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

export const sensorGQL = {
  getSensorsWithIoT,
};
