import { SaveDialogComponent } from './save-dialog.component';

describe('Nuzlocke: Saves > Save Dialog Component', () => {
  let component: SaveDialogComponent;

  beforeEach(() => {
    component = new SaveDialogComponent({} as any, {} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
