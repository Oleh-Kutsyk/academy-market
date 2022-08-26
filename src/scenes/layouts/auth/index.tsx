import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '../styled';
import { Header } from '../../../components/header';

export const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
