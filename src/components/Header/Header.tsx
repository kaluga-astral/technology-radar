import { DashboardLayout } from '@astral/ui';

import { LogoAstral } from '../icons';
import { BASE_PATH } from '../../config';

export const Header = () => {
  return (
    <DashboardLayout.Header
      product={{
        href: `${BASE_PATH}/`,
        logo: () => <LogoAstral />,
        name: 'Frontend. Tech Radar',
      }}
    />
  );
};
