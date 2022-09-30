import React, { useEffect } from 'react';
import { ROUTES } from '../routesPath';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TRootState } from '../../../stores';

interface IUnauthorizedRouteContainer {
  element: React.ReactNode;
}

export const UnauthorizedRouteContainer: React.FC<
  IUnauthorizedRouteContainer
> = ({ element }) => {
  const auth = useSelector((state: TRootState) => state.auth);
  const navigate = useNavigate();
  const { pathname }: Location = useLocation();

  useEffect(() => {
    if (auth.isAuth) {
      navigate(ROUTES.main.allProducts);
    }
    if (pathname === ROUTES.auth.root) {
      navigate(ROUTES.auth.signIn);
    }
  }, [auth.isAuth, navigate]);

  return !auth.isAuth ? <React.Fragment>{element}</React.Fragment> : null;
};
