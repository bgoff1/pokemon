import { Tab } from '@models/tab.model';

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
      { route: 'routes', name: 'routes' },
      { route: 'encounters', name: 'encounters' },
      { route: 'overview', name: 'overview' }
    ]
  }
];

export const sidebarLinks: string[] = ['team-builder', 'nuzlocke'];
