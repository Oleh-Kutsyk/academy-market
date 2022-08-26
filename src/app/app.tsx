import React, { useEffect } from 'react';
import { GlobalStyles } from './styles';
import { RenderRoutes } from '../core/routes/configuration';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, setStore } from '../stores';
import { routes } from '../core/routes/routes';
import { initApp } from '../utils';
import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledCompThemeProvider } from 'styled-components';

const theme = createTheme();

export const App: React.FC = () => {
  const auth = useSelector((state: TRootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const authStore = initApp();
    dispatch(setStore(authStore));
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
