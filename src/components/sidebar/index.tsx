import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import { useDispatch, useSelector } from 'react-redux';
import { handleSideBar, TRootState } from '../../stores';
import { Typography } from '@mui/material';
import { ROUTES } from '../../core/routes/routesPath';

import * as Styled from './styled';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

export const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ app }: TRootState) => app.isSideBarOpen);

  const handleDrawerClose = () => {
    dispatch(handleSideBar());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant='persistent'
        anchor='left'
        open={isOpen}
      >
        <Styled.DrawerHeader>
          <Typography>Menu</Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Styled.DrawerHeader>
        <Divider />
        <List>
          {links.map(link => (
            <ListItem key={link.id} disablePadding>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.title} />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

const links = [
  {
    id: 'Products',
    title: 'Products',
    to: ROUTES.main.allProducts,
    icon: <ProductionQuantityLimitsIcon />,
  },
  {
    id: 'Categories',
    title: 'Categories',
    to: ROUTES.main.allCategories,
    icon: <CategoryIcon />,
  },
] as const;
