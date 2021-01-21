import { CreateRouteDialogComponent } from './create-route-dialog.component';

describe('Nuzlocke: Routes > Create Route Dialog Component', () => {
  let component: CreateRouteDialogComponent;

  beforeEach(() => {
    component = new CreateRouteDialogComponent({} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
