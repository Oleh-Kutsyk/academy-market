import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
