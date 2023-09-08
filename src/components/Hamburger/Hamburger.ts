import { IconButton, styled } from '@mui/material';
import { IconButtonProps } from '@mui/material';

interface Props extends IconButtonProps {
  open?: boolean;
}

export const Hamburger = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<Props>(({ theme, open }) => ({
  marginRight: theme.spacing(2),
  display: open ? 'none' : 'inherit',
}));
