import { Tab } from '@models/tab.model';
import { Link } from '@models/link.model';

export const tabs: Tab[] = [
  {
    path: 'team-builder',
    links: [
      { route: 'home', name: 'team-builder' },
      { route: 'options', name: 'options' }
    ]
  },
  {
    path: 'options',
    links: [
      { route: 'home', name: 'team-builder' },
      { route: 'options', name: 'options' }
    ]
  },
  {
    path: 'nuzlocke',
    links: [
      { route: 'saves', name: 'saves' },
      { route: 'routes', name: 'routes' },
      { route: 'overview', name: 'overview' }
    ]
  }
];

export const idTabs = ['routes', 'overview'];

export const sidebarLinks: Link[] = [
  { link: 'team-builder', icon: 'people' },
  { link: 'nuzlocke', icon: 'local_pharmacy' }
];
