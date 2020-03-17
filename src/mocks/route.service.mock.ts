import { of } from 'rxjs/internal/observable/of';

export default {
  links: [],
  menuClick$: of(true),
  clickMenu: jest.fn(),
  route$: of('abc'),
  isCurrentRoute: jest.fn(),
  changeRoute: jest.fn()
} as any;
