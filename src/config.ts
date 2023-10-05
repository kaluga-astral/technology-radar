import { FunctionComponent } from 'react';
import {
  AnalyticOutlineMd,
  CertOutlineMd,
  DocumentOutlineMd,
} from '@astral/ui';

const { VITE_RENDER_RADAR_URL: RENDER_RADAR_URL } = import.meta.env;

export { RENDER_RADAR_URL };

export const TEAMS: Record<string, { name: string; icon: FunctionComponent }> =
  {
    common: { name: 'Общий по компании', icon: CertOutlineMd },
    edo: { name: 'ЭДО', icon: DocumentOutlineMd },
    lkp: { name: 'ЛКП', icon: AnalyticOutlineMd },
  };
