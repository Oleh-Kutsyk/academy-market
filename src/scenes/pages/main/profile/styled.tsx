import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  width: '100%',
}));

export const Info = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 26,
  marginRight: theme.spacing(4),
}));

export const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 26,
}));
