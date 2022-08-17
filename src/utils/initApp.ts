import { IAuth } from '../stores';

export const initApp = (): IAuth => {
  const token = localStorage.getItem('token');

  const authBase: IAuth = {
    isAuth: false,
    isAuthChecked: true,
    token: null,
  };

  if (!token) {
    return authBase;
  }

  authBase.isAuth = true;
  authBase.token = token || null;
  authBase.isAuthChecked = true;

  return authBase;
};
