export interface ISensor {
  deviceId: number;
  name: string;
  serial: string;
  mac: string;
  region: string;
  longitude: number;
  latitude: number;
}

export interface ISensorState {
  sensors: ISensor[];
}
