import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const marginBottom40 = 5;

export const Title = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontSize: 21,
  marginBottom: theme.spacing(marginBottom40),
}));
