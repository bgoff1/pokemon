jest.mock('@util/name');
jest.mock('@angular/cdk/drag-drop', () => ({
  __esModule: true,
  transferArrayItem: jest.fn()
}));
import { DragDropComponent } from './drag-drop.component';
import draggingServiceMock from '@mocks/dragging.service.mock';
import dialogRefMock from '@mocks/dialog-ref.mock';
import nuzlockeServiceMock from '@features/nuzlocke/mocks/nuzlocke.service.mock';
import { of } from 'rxjs';

describe('Drag Drop Component', () => {
  let component: DragDropComponent;

  beforeEach(() => {
    component = new DragDropComponent(
      dialogRefMock,
      draggingServiceMock,
      nuzlockeServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get pokemon image', () => {
    expect(component.getPokemonImage('name')).toEqual(
      'assets/pokemon/name.png'
    );
  });

  test('should start dragging', () => {
    component.startDragging();
    expect(draggingServiceMock.isDragging).toBe(true);
  });

  test('should stop dragging', () => {
    component.stopDragging();
    expect(draggingServiceMock.isDragging).toBe(false);
  });

  test('should handle drag drop functionality', () => {
    component.update.next = jest.fn();
    component.drop({
      previousContainer: {},
      container: { name: 'a', data: [1, 2, 3] },
      previousIndex: null,
      currentIndex: 0
    } as any);
    expect(component.update.next).toBeCalled();
  });

  test('should not allow dropping into a full party', () => {
    component.update.next = jest.fn();
    component.drop({
      previousContainer: {},
      container: { name: 'a', data: [{ status: 0 }, 2, 3, 4, 5, 6] },
      previousIndex: null,
      currentIndex: 0
    } as any);
    expect(component.update.next).not.toBeCalled();
  });

  test('should not do anything if they are the same container', () => {
    component.update.next = jest.fn();
    const container = { name: 'a', data: [1, 2, 3] };
    component.drop({
      previousContainer: container,
      container,
      previousIndex: null,
      currentIndex: 0
    } as any);
    expect(component.update.next).not.toBeCalled();
  });
  test('should move if they are not in same party', () => {
    component.update.next = jest.fn();
    const container = { name: 'a', data: [1, 2, 3] };
    component.drop({
      previousContainer: {},
      container,
      previousIndex: null,
      currentIndex: 0
    } as any);
    expect(component.update.next).toBeCalled();
  });

  test('should handle clicking on a pokemon', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: jest.fn(() => of({ pokemon: 'a', nickname: '' }))
    }));
    nuzlockeServiceMock.updateEncounter = jest.fn();

    component.selectPokemon({} as any);

    expect(nuzlockeServiceMock.updateEncounter).toBeCalled();
  });

  test('should not update if cancel after clicking on a pokemon', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: jest.fn(() => of(null))
    }));
    nuzlockeServiceMock.updateEncounter = jest.fn();

    component.selectPokemon({} as any);

    expect(nuzlockeServiceMock.updateEncounter).not.toBeCalled();
  });
});
