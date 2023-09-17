import { Divider, IconButton, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

import { ChevronLeft, DrawerHeader, MenuItem } from '../index';
import { TEAMS } from '../../config';

import { DrawerStyled } from './styles';

type Props = {
  isDrawerShow: boolean;
  onClickDrawer: () => void;
};

export const SideBar = ({ isDrawerShow, onClickDrawer }: Props) => {
  return (
    <DrawerStyled variant="temporary" anchor="left" open={isDrawerShow}>
      <DrawerHeader>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onClickDrawer}
          edge="start"
        >
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <MenuList>
        <Link to="/" key="link-home">
          <MenuItem>Home</MenuItem>
        </Link>
        {Object.entries(TEAMS).map(([id, { name }]) => (
          <Link to={`/${id}`} key={id}>
            <MenuItem>{name}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </DrawerStyled>
  );
};
