import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '300px',
  borderRadius: 10,
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  background: 'white',
}));

export const Input = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .MuiInputBase-root': {
    height: 40,
  },
}));

export const Login = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));
