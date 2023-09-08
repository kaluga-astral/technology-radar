import { AppBar, Hamburger, Menu } from '../../components';

import { Toolbar } from './Toolbar';

type Props = { open: boolean; onClick: () => void };

export const Header = ({ open, onClick }: Props) => (
  <AppBar open={open}>
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
