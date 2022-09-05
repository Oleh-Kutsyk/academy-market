import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Root = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
  width: '50%',
}));

export const Title = styled(Typography)(() => ({
  fontSize: 22,
}));

export const Description = styled(Typography)(() => ({
  fontSize: 18,
}));

export const Image = styled(Box)(() => ({
  display: 'flex',
  width: 400,
  height: 400,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}));
