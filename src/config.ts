import { FunctionComponent } from 'react';
import {
  CassOutlineMd,
  CertAddOutlineMd,
  CertOutlineMd,
  DocumentOutlineMd,
  PeopleOutlineMd,
} from '@astral/ui';

const { VITE_RENDER_RADAR_URL: RENDER_RADAR_URL, VITE_BASE_PATH: BASE_PATH } =
  import.meta.env;

export { RENDER_RADAR_URL, BASE_PATH };

export const TEAMS: Record<string, { name: string; icon: FunctionComponent }> =
  {
    common: { name: 'Общий по компании', icon: CertOutlineMd },
    docs: { name: 'Доки', icon: DocumentOutlineMd },
    ofd: { name: 'ОФД', icon: CassOutlineMd },
    kedo: { name: 'KЭДО', icon: DocumentOutlineMd },
    wr: { name: 'Web-Регистратор', icon: PeopleOutlineMd },
    sign: { name: 'Подпись', icon: CertAddOutlineMd },
    // lkp: { name: 'ЛКП', icon: AnalyticOutlineMd },
  };
