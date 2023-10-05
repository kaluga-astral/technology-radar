import { FunctionComponent } from 'react';
import { ArrowROutlineLg } from '@astral/ui';

import * as radarData from './radarData';

export const RADAR_ICONS: Record<keyof typeof radarData, FunctionComponent> = {
  edo: ArrowROutlineLg,
};
