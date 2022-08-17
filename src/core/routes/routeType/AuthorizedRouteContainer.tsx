import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routesPath';
import { useSelector } from 'react-redux';
import { TRootState } from '../../../stores';

interface IAuthorizedRouteContainer {
  element: React.ReactNode;
}

export const AuthorizedRouteContainer: React.FC<IAuthorizedRouteContainer> = ({
  element,
}) => {
  const auth = useSelector((state: TRootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuth) {
      navigate(ROUTES.auth.root);
    }
  }, [navigate, auth.isAuth]);

  return auth.isAuth ? <React.Fragment>{element}</React.Fragment> : null;
};
