import { OverviewComponent } from './overview.component';
import activatedRouteMock from '@mocks/activated-route.mock';

describe('Nuzlocke Overview Component', () => {
  let component: OverviewComponent;

  beforeEach(() => {
    component = new OverviewComponent(activatedRouteMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
