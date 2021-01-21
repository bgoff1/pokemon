import { PickerComponent } from './picker.component';

describe('PickerComponent', () => {
  let component: PickerComponent;

  beforeEach(() => {
    component = new PickerComponent({} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
