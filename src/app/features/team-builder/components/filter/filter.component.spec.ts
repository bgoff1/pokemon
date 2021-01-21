import { FilterOptionsComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterOptionsComponent;

  beforeEach(() => {
    component = new FilterOptionsComponent({} as any, {} as any, {} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
