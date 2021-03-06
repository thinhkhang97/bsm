import {API_URL} from '../config';
import {httpService} from '../services';

export interface IAuthenticateResult {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export const oauth = async (
  apiKey: string,
): Promise<IAuthenticateResult | undefined> => {
  try {
    const res = await httpService.post(API_URL, null, {
      grant_type: 'client_credentials',
      scope: apiKey,
    });
    return res.data;
  } catch {
    return;
  }
};
