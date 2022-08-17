import React from 'react';
import { ERouteType, ICustomRouteObject } from '../configuration';
import { ROUTES } from '../routesPath';
import { AuthLayout } from '../../../scenes/layouts';
import { Login } from '../../../scenes/pages/auth';

export const authRoutes: ICustomRouteObject[] = [
  {
    id: `authRoutes_1`,
    path: ROUTES.auth.root,
    element: <AuthLayout />,
    routeType: ERouteType.UnauthorizedOnly,
    children: [
      {
        id: `authRoutes_2`,
        path: ROUTES.auth.signIn,
        routeType: ERouteType.Public,
        element: <Login />,
      },
    ],
  },
];
