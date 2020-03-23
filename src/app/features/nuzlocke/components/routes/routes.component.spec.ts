import { RoutesComponent } from './routes.component';
import activatedRouteMock from '@mocks/activated-route.mock';

describe('RoutesComponent', () => {
  let component: RoutesComponent;

  beforeEach(() => {
    component = new RoutesComponent(activatedRouteMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
