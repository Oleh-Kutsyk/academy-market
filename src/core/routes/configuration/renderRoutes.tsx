import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ERouteType, ICustomRouteObject } from './routeTypes';
import {
  AuthorizedRouteContainer,
  PublicRouteContainer,
  UnauthorizedRouteContainer,
} from '../routeType';

interface IRenderComponentByRouteType {
  route: ICustomRouteObject;
}

const RenderComponentByRouteType: React.FC<IRenderComponentByRouteType> = ({
  route,
}) => {
  if (route.routeType === ERouteType.Authorized) {
    return <AuthorizedRouteContainer element={route.element} />;
  }

  if (route.routeType === ERouteType.UnauthorizedOnly) {
    return <UnauthorizedRouteContainer element={route.element} />;
  }

  return <PublicRouteContainer element={route.element} />;
};

interface IProps {
  routes: ICustomRouteObject[];
}

const getRouteMap = (props: IProps): JSX.Element[] => {
  return props.routes.map(route => {
    return (
      <Route
        index={route.index}
        path={route.path}
        element={<RenderComponentByRouteType route={route} />}
        key={route.id}
      >
        {getChildrenRouteMap(route.children)}
      </Route>
    );
  });
};

const getChildrenRouteMap = (
  children: ICustomRouteObject['children']
): JSX.Element[] | undefined => {
  if (children?.length) {
    return children?.map(childRoute => (
      <Route
        index={childRoute.index}
        path={childRoute.path}
        element={<RenderComponentByRouteType route={childRoute} />}
        key={childRoute.id}
      >
        {childRoute?.children?.length &&
          getChildrenRouteMap(childRoute.children)}
      </Route>
    ));
  }
};

export const RenderRoutes: React.FC<IProps> = props => {
  const routes = useMemo(() => getRouteMap(props), [props]);

  return <Routes>{routes}</Routes>;
};
