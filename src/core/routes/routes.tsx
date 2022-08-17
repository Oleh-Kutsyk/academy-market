import { ICustomRouteObject } from './configuration';

import { authRoutes, mainRoutes } from './routesConfigs';

export const routes: ICustomRouteObject[] = [...authRoutes, ...mainRoutes];
