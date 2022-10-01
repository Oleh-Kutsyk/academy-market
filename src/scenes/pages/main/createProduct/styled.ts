import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const margin32 = 4;

export const Add = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(margin32),
}));
