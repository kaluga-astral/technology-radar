import { MenuItem as MuiMenuItem, styled } from '@mui/material';

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  height: theme.spacing(8),
}));
