import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../../components/sidebar';
import { Main } from '../styled';
import { useSelector } from 'react-redux';
import { TRootState } from '../../../stores';
import { Header } from '../../../components/header';

export const MainLayout = () => {
  const isOpen = useSelector(({ app }: TRootState) => app.isSideBarOpen);
  return (
    <div>
      <Sidebar />
      <Header />
      <Main open={isOpen}>
        <Outlet />
      </Main>
    </div>
  );
};
