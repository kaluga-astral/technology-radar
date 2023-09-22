import { Link, LinkProps, useLocation } from 'react-router-dom';
import { DashboardLayout } from '@astral/components';
// @ts-ignore
import { NavMenuProps } from '@astral/components/NavMenu';
import { forwardRef } from 'react';

import { CompanyOutlineMd, ProfileOutlineMd } from '../index';
import { getDataConfig } from '../../utils';

type MenuProps = {
  items: NavMenuProps['items'];
};

const getProductsPaths = (pathname: string) => {
  return getDataConfig().map(([id, { name }]) => [
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
  ]);
};
const sideBar = (pathname: string): MenuProps => {
  const baseRoute = [
    'home',
    {
      icon: <ProfileOutlineMd />,
      text: 'Home',
      active: pathname === '/',
      component: forwardRef<HTMLAnchorElement, LinkProps>(
        ({ children, ...props }, ref) => (
          <Link key="home" ref={ref} {...props} to="/">
            {children}
          </Link>
        ),
      ),
    },
  ];

  return {
    items: [baseRoute, ...getProductsPaths(pathname)],
  };
};

export const SideBar = () => {
  const { pathname } = useLocation();

  return <DashboardLayout.Sidebar menu={sideBar(pathname)} />;
};
