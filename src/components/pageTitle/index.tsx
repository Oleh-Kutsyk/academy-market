import React from 'react';

import * as Styled from './styled';

interface IPageTitle {
  title?: string;
}

export const PageTitle: React.FC<IPageTitle> = ({ title }) => {
  return <Styled.Title>{title}</Styled.Title>;
};
