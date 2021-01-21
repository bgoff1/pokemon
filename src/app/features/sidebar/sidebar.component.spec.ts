import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;

  beforeEach(() => {
    component = new SidebarComponent({} as any, {} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
