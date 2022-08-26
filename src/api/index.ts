import axios from 'axios';
import { apiRoutes } from './routes';

export interface ILoginBody {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export const loginApi = async ({
  username,
  password,
}: ILoginBody): Promise<ILoginResponse> => {
  return await axios.post(apiRoutes.login, { username, password }, {});
};
