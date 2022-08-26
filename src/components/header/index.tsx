import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { handleSideBar, setStore, TRootState } from '../../stores';
import { AppBar } from './styled';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../core/routes/routesPath';
import { initApp } from '../../utils';
import { Avatar } from './components/avatar';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector(({ app }: TRootState) => app.isSideBarOpen);
  const isAuth = useSelector(({ auth }: TRootState) => auth.isAuth);

  const handleSideBarOpen = () => {
    dispatch(handleSideBar());
  };

  const toggleLogin = () => {
    if (isAuth) {
      localStorage.clear();
      const authStore = initApp();
      dispatch(setStore(authStore));
    } else {
      navigate(ROUTES.auth.root);
    }
  };

  return (
    <AppBar position='fixed' open={isOpen}>
      <Toolbar>
        {isAuth && (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleSideBarOpen}
            edge='start'
            sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant='h6' noWrap component='div'>
          Market
        </Typography>
      </Toolbar>

      {!isAuth ? (
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={toggleLogin}
          edge='start'
          sx={{ mr: 2 }}
        >
          <Typography>Login</Typography>
        </IconButton>
      ) : (
        <Avatar onLogin={toggleLogin} />
      )}
    </AppBar>
  );
};
