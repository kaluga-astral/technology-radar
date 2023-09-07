import { IconButton, styled } from '@mui/material';

import { HamburgerProps } from './types';

export const Hamburger = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<HamburgerProps>(({ theme, open }) => ({
  marginRight: theme.spacing(2),
  display: open ? 'none' : 'inherit',
}));
