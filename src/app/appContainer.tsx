import React from 'react';
import { SnackbarProvider } from 'notistack';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { App } from './app';
import { store } from '../stores';

const maxSnack = 3;

export const AppContainer: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <SnackbarProvider maxSnack={maxSnack} preventDuplicate>
          <App />
        </SnackbarProvider>
      </Provider>
    </HashRouter>
  );
};
