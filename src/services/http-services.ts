import axios from 'axios';

export const post = async (
  url: string,
  data: any,
  headers: any,
): Promise<any> => {
  return await axios.post(url, data, {headers});
};
