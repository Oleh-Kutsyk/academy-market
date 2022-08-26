import React from 'react';
import { ERouteType, ICustomRouteObject } from '../configuration';
import { ROUTES } from '../routesPath';
import { MainLayout } from '../../../scenes/layouts';
import {
  AllProducts,
  CreateProduct,
  Main,
  EditProduct,
} from '../../../scenes/pages/main';

export const mainRoutes: ICustomRouteObject[] = [
  {
    id: `mainRoutes_1`,
    path: ROUTES.main.root,
    element: <MainLayout />,
    routeType: ERouteType.Public,
    children: [
      {
        id: `mainRoutes_2`,
        index: true,
        path: ROUTES.main.root,
        routeType: ERouteType.Public,
        element: <Main />,
      },
      {
        id: `mainRoutes_3`,
        path: ROUTES.main.allProducts,
        routeType: ERouteType.Public,
        element: <AllProducts />,
        children: [
          {
            id: `mainRoutes_4`,
            path: ROUTES.main.createProduct,
            routeType: ERouteType.Authorized,
            element: <CreateProduct />,
          },
          {
            id: `mainRoutes_5`,
            path: ROUTES.main.editProduct,
            routeType: ERouteType.Authorized,
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
];
