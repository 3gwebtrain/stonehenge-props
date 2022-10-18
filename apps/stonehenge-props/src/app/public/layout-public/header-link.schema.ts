import { HeaderLinkProps } from '@stonehenge/prop-types';

export const HeaderPublicLinkSchema: HeaderLinkProps[] = [
  {
    name: 'Home',
    link: '/',
    type: 'link',
  },
  {
    name: 'Landlord',
    link: '/landlord',
    type: 'link',
  },
  {
    name: 'Tenant',
    link: '/tenant',
    type: 'link',
  },
  {
    name: 'Sign In',
    type: 'button',
  },
];
