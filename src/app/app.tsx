import React, { useEffect } from 'react';
import { GlobalStyles } from './styles';
import { RenderRoutes } from '../core/routes/configuration';

import { setStore, getProfileThunk } from '../stores';
import { routes } from '../core/routes/routes';
import { initApp, useAppDispatch, useAppSelector } from '../utils';
import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledCompThemeProvider } from 'styled-components';
import { useSnackBar } from '../hooks/useSnackBar';

const theme = createTheme();

export const App: React.FC = () => {
  useSnackBar();
  const { auth } = useAppSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authStore = initApp();
    dispatch(setStore(authStore));
    dispatch(getProfileThunk());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledCompThemeProvider theme={theme}>
        <GlobalStyles />
        {auth.isAuthChecked ? <RenderRoutes routes={routes} /> : null}
      </StyledCompThemeProvider>
    </ThemeProvider>
  );
};
