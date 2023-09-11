import { Drawer, styled } from '@mui/material';

const drawerWidth = 150;

export const SideBarStyled = styled(Drawer)`
  box-sizing: border-box;
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & > .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }
`;
