import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Main = styled(Box)(() => ({
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
  alignItems: 'center',
  background: theme.palette.primary.light,
  width: '100%',
  borderRadius: 10,
  height: 70,
  padding: theme.spacing(0, 4, 0, 4),
  boxSizing: 'border-box',
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey['700'],
  fontSize: 26,
  marginRight: theme.spacing(4),
}));

export const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 26,
}));
