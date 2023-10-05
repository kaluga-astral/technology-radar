import { DashboardLayout } from '@astral/ui';

import { LogoAstral } from '../index';

export const Header = () => {
  return (
    <DashboardLayout.Header
      product={{
        logo: () => <LogoAstral />,
        name: 'Tech Radar',
      }}
    />
  );
};
