import { DataType } from '../../utils/getDataConfig/types.ts';

export type SideBarLeftPropsType = {
  isDrawerShow: boolean;
  handleDrawer: () => void;
  listItems: DataType[];
};
