import React from 'react';
import { ERouteType, ICustomRouteObject } from '../configuration';
import { ROUTES } from '../routesPath';
import { MainLayout, ProductsLayout } from '../../../scenes/layouts';
import {
  AllProducts,
  CreateProduct,
  Main,
  EditProduct,
  AllCategories,
  Profile,
  ProductInfo,
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
        element: <ProductsLayout />,
        children: [
          {
            id: `mainRoutes_4`,
            index: true,
            routeType: ERouteType.Public,
            element: <AllProducts />,
          },
          {
            id: `mainRoutes_5`,
            path: ROUTES.main.createProduct,
            routeType: ERouteType.Authorized,
            element: <CreateProduct />,
          },
          {
            id: `mainRoutes_6`,
            path: ROUTES.main.productInfo,
            routeType: ERouteType.Authorized,
            element: <ProductInfo />,
          },
          {
            id: `mainRoutes_7`,
            path: ROUTES.main.editProduct,
            routeType: ERouteType.Authorized,
            element: <EditProduct />,
          },
        ],
      },
      {
        id: `mainRoutes_8`,
        path: ROUTES.main.allCategories,
        routeType: ERouteType.Authorized,
        element: <AllCategories />,
      },
      {
        id: `mainRoutes_9`,
        path: ROUTES.main.productsInCategory,
        routeType: ERouteType.Authorized,
        element: <ProductsLayout />,
        children: [
          {
            id: `mainRoutes_10`,
            index: true,
            routeType: ERouteType.Public,
            element: <AllProducts />,
          },
          {
            id: `mainRoutes_11`,
            path: ROUTES.main.createProduct,
            routeType: ERouteType.Authorized,
            element: <CreateProduct />,
          },
          {
            id: `mainRoutes_12`,
            path: ROUTES.main.productInfo,
            routeType: ERouteType.Authorized,
            element: <ProductInfo />,
          },
          {
            id: `mainRoutes_13`,
            path: ROUTES.main.editProduct,
            routeType: ERouteType.Authorized,
            element: <EditProduct />,
          },
        ],
      },
      {
        id: `mainRoutes_14`,
        path: ROUTES.main.profile,
        routeType: ERouteType.Authorized,
        element: <Profile />,
      },
    ],
  },
];
