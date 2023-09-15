import { Divider, IconButton, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

import { ChevronLeft, DrawerHeader, MenuItem } from '../index';
import { AllConfigsData } from '../../config';

import { DrawerStyled } from './styles';

type Props = {
  isDrawerShow: boolean;
  onClickDrawer: () => void;
  products: AllConfigsData;
};

export const SideBar = ({ isDrawerShow, onClickDrawer, products }: Props) => {
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
        {products.map(({ productName, productId }) => (
          <Link to={`/${productId}`} key={`link-${productId}`}>
            <MenuItem key={`list-${productId}`}>{productName}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </DrawerStyled>
  );
};
