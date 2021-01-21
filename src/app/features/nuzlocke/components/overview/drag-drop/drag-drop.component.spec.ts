import { matDialogMock } from '@mock/mat-dialog.mock';
import { nuzlockeServiceMock } from '@mock/nuzlocke.service.mock';
import { DraggingService } from '@services/dragging/dragging.service';
import { DragDropComponent } from './drag-drop.component';

describe('Nuzlocke: Overview > Drag Drop Component', () => {
  let component: DragDropComponent;
  let draggingService: DraggingService;

  beforeEach(() => {
    draggingService = new DraggingService();
    component = new DragDropComponent(
      matDialogMock as any,
      draggingService,
      nuzlockeServiceMock as any
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move items from arrays', () => {
    jest.spyOn(component.update, 'next');

    component.drop({
      previousContainer: { data: [] },
      container: { data: [{ status: 1 }] },
      currentIndex: 0,
      previousIndex: 1
    } as any);

    component.drop({
      previousContainer: null,
      container: null,
      currentIndex: 0,
      previousIndex: 1
    } as any);

    component.drop({
      previousContainer: { data: [] },
      container: { data: Array.from(Array(6)).map(() => ({ status: 0 })) },
      currentIndex: 0,
      previousIndex: 1
    } as any);

    expect(component.update.next).toHaveBeenCalledTimes(1);
  });

  it('should be able to start dragging', () => {
    component.startDragging();
    expect(draggingService.isDragging).toBe(true);
  });

  it('should be able to stop dragging', () => {
    component.stopDragging();
    expect(draggingService.isDragging).toBe(false);
  });

  it('should update the encounter on pokemon select', () => {
    component.selectPokemon({ routeName: 'a', status: 0, name: '' });
    component.selectPokemon(null as any);
    expect(nuzlockeServiceMock.updateEncounter).toHaveBeenCalledTimes(1);
  });
});
