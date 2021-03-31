import axios from 'axios';

export const post = async (
  url: string,
  data: any,
  headers: any,
): Promise<any> => {
  const res = await axios.post(url, data, {headers});
  return {data: res.data, status: res.status};
};
