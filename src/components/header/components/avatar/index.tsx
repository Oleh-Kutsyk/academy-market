import React from 'react';
import {
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Avatar as AvatarNui,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../core/routes/routesPath';

const settings = ['Profile', 'Add product', 'Logout'];

interface IAvatar {
  onLogin: () => void;
}

export const Avatar: React.FC<IAvatar> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (type: string) => {
    if (type === 'Logout') {
      onLogin();
    }
    if (type === 'Profile') {
      navigate(ROUTES.main.profile);
    }

    if (type === 'Add product') {
      navigate(`${ROUTES.main.allProducts}/${ROUTES.main.createProduct}`);
    }
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ mr: 2, display: 'flex' }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AvatarNui alt='Avatar' src='' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting: string) => (
          <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
            <Typography textAlign='center'>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
