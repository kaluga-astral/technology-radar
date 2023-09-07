import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { DrawerHeader, SideBar } from '../../components';
import { ChevronLeft } from '../../icons';

import { SideBarLeftPropsType } from './types';

export const SideBarLeft = ({
  isDrawerShow,
  handleDrawer,
  listItems,
}: SideBarLeftPropsType) => {
  return (
    <SideBar variant="persistent" anchor="left" open={isDrawerShow}>
      <DrawerHeader>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
        >
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        <Link to="/" key="link-home">
          <ListItem key="Home">
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        {listItems.map((obj) => (
          <Link to={`/${obj.rootApp}`} key={'link-' + obj.rootApp}>
            <ListItem key={obj.rootApp}>
              <ListItemButton>
                <ListItemText primary={obj.sidebarItem} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </SideBar>
  );
};
