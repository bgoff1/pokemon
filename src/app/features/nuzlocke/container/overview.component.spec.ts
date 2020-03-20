import { OverviewComponent } from './overview.component';

describe('Nuzlocke Component', () => {
  let component: OverviewComponent;

  beforeEach(() => {
    component = new OverviewComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
