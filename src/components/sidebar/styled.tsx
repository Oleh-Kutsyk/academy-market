import { styled } from '@mui/material/styles';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 1),
  justifyContent: 'space-between',
}));
