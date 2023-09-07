import { Drawer, styled } from '@mui/material';

import { drawerWidth } from '../../constants';

export const SideBar = styled(Drawer)`
  box-sizing: border-box;
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & > .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }
`;
