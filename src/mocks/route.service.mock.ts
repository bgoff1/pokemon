import { of } from 'rxjs/internal/observable/of';

export default {
  open: false,
  links: [],
  menuClick$: of(true),
  route$: of('/nuzlocke'),
  isCurrentRoute: jest.fn(() => true),
  clickMenu: jest.fn(),
  changeRoute: jest.fn(),
  formatLink: jest.fn(() => ({ label: '', path: '' })),
  changeTab: jest.fn()
} as any;
