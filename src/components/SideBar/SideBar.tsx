import { Link, LinkProps, useLocation } from 'react-router-dom';
import { DashboardLayout, NavMenuProps } from '@astral/ui';
import { forwardRef } from 'react';

import { CompanyOutlineMd } from '../icons';
import { TEAMS } from '../../config';

export const SideBar = () => {
  const { pathname } = useLocation();

  const items = Object.entries(TEAMS).map<NavMenuProps['items'][0]>(
    ([id, { name }]) => {
      return [
        id,
        {
          icon: <CompanyOutlineMd />,
          text: name,
          active: pathname === `/${id}`,
          component: forwardRef<HTMLAnchorElement, LinkProps>(
            ({ children, ...props }, ref) => (
              <Link key={id} ref={ref} {...props} to={`/${id}`}>
                {children}
              </Link>
            ),
          ),
        },
      ];
    },
  );

  return <DashboardLayout.Sidebar menu={{ items }} />;
};
