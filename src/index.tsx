import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
