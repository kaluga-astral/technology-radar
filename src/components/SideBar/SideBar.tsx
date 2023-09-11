import { Divider, IconButton, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

import { ChevronLeft, DrawerHeader, MenuItem } from '../index';
import { AllConfigsData } from '../../config';

import { SideBarStyled } from './styles';

type Props = {
  isDrawerShow: boolean;
  onClickDrawer: () => void;
  products: AllConfigsData;
};

export const SideBar = ({ isDrawerShow, onClickDrawer, products }: Props) => {
  return (
    <SideBarStyled variant="persistent" anchor="left" open={isDrawerShow}>
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
        {products.map(([productRoot, { productName, productId }]) => (
          <Link to={`/${productRoot}`} key={`link-${productId}`}>
            <MenuItem key={`list-${productId}`}>{productName}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </SideBarStyled>
  );
};
