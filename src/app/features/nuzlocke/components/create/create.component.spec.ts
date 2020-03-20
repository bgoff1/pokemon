import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;

  beforeEach(() => {
    component = new CreateComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
