import { DashboardLayout } from '@astral/ui';

import { LogoAstral } from '../icons';

export const Header = () => {
  return (
    <DashboardLayout.Header
      product={{
        href: '/',
        logo: () => <LogoAstral />,
        name: 'Frontend. Tech Radar',
      }}
    />
  );
};
