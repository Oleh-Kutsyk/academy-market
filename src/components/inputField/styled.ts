import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

const margin32 = 4;

export const Root = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(margin32),
  width: '100%',
}));
export const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(margin32),
}));
