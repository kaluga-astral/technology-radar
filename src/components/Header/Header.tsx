import { AppBar } from '@mui/material';

import { Menu } from '../index';

import { Toolbar } from './Toolbar';
import { Hamburger } from './Hamburger';

type Props = { open: boolean; onClick: () => void };

export const Header = ({ open, onClick }: Props) => (
  <AppBar>
    <Toolbar>
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
