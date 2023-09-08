import { Divider, IconButton, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

import { ChevronLeft, DrawerHeader, MenuItem, SideBar } from '../index';
import { AllConfigsDataType } from '../../config/types';

type Props = {
  isDrawerShow: boolean;
  onClickDrawer: () => void;
  listItems: AllConfigsDataType;
};

export const SideBarLeft = ({
  isDrawerShow,
  onClickDrawer,
  listItems,
}: Props) => {
  return (
    <SideBar variant="persistent" anchor="left" open={isDrawerShow}>
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
        {listItems.map(([productRoot, { productName, productId }]) => (
          <Link to={`/${productRoot}`} key={`link-${productId}`}>
            <MenuItem key={`list-${productId}`}>{productName}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </SideBar>
  );
};
