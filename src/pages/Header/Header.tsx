import { Toolbar } from '@mui/material';

import { AppBar, Hamburger } from '../../components';
import { Menu } from '../../icons';

import { HeaderPropsType } from './types';

export const Header = ({ open, onClick }: HeaderPropsType) => (
  <AppBar open={open}>
    <Toolbar sx={{ backgroundColor: '#f1f1f1' }}>
      <Hamburger
        color="primary"
        aria-label="open drawer"
        onClick={onClick}
        edge="start"
        open={open}
      >
        <Menu />
      </Hamburger>
    </Toolbar>
  </AppBar>
);
