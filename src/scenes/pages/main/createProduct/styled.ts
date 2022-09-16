import { styled } from '@mui/material/styles';
import { Button, TextField, Box } from '@mui/material';

const margin32 = 4;

export const Root = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
}));

export const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(margin32),
}));

export const Add = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(margin32),
}));
