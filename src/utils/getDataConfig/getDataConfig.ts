import * as CONFIG from '../../config';

import { DataType } from './types';

export const getDataConfig = (): DataType[] => {
  return Object.values(CONFIG).map(({ rootApp, sidebarItem }) => {
    return { rootApp, sidebarItem };
  });
};
