import React from 'react';

interface IPublicRouteContainer {
  element: React.ReactNode;
}

export const PublicRouteContainer: React.FC<IPublicRouteContainer> = ({
  element,
}) => {
  return <React.Fragment>{element}</React.Fragment>;
};
