import { SavesComponent } from './saves.component';

describe('Nuzlocke: Saves Component', () => {
  let component: SavesComponent;

  beforeEach(() => {
    component = new SavesComponent({} as any, {} as any, {} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
