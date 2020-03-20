import { Tab } from '@models/tab.model';

export const tabs: Tab[] = [
  { path: 'team-builder', links: ['team-builder', 'options'] },
  { path: 'options', links: ['team-builder', 'options'] },
  { path: 'nuzlocke', links: ['routes', 'encounters', 'overview'] }
];

export const sidebarLinks: string[] = ['team-builder', 'nuzlocke'];
