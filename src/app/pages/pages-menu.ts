import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'General',
    group: true,
  },
  {
    title: 'Home',
    icon: 'home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Composición',
    icon: 'music-outline',
    link: '/pages/composicion',
  },
  {
    title: 'Mi repositorio',
    icon: 'pantone-outline',
    link: '/pages/repositorio',
  },
  {
    title: 'Administración',
    icon: 'pantone-outline',
    children: [
      {
        title: 'Logs',
        link: '/pages/admin/logs',
      },
    ],
  },
  {
    title: 'Cuenta',
    group: true,
  },
  {
    title: 'Cerrar sesión',
    icon: 'log-out-outline',
    link: '/auth/logout',
  },
];
