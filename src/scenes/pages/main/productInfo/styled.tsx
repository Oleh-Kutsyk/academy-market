import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const marginRight32 = 4;
const marginBottom16 = 2;

export const Root = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(0, marginRight32, marginBottom16, 0),
}));

export const Title = styled(Typography)(() => ({
  fontSize: 22,
}));

export const Description = styled(Typography)(() => ({
  fontSize: 18,
}));

export const Image = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 400,
  height: 400,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginBottom: theme.spacing(marginBottom16),
}));
