import gql from 'graphql-tag';

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
