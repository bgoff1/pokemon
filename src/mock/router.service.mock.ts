import { Subject } from 'rxjs';

export const routerServiceMock = {
  open: false,
  links: [],
  menuClick$: new Subject(),
  route$: new Subject(),
  isCurrentRoute: jest.fn(),
  clickMenu: jest.fn(),
  formatLink: () => ({ label: '', path: '' }),
  changeTab: jest.fn(),
  getTabs: () => [],
  redirect: jest.fn()
};
