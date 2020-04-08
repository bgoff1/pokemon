jest.mock('@util/enum');
jest.mock('@models/pokemon/game-groups', () => ({
  __esModule: true,
  formatGameName: () => 1
}));
import { SavesComponent } from './saves.component';
import nuzlockeServiceMock from '@nuzlocke/mocks/nuzlocke.service.mock';
import routerServiceMock from '@mocks/router.service.mock';
import dialogRefMock from '@mocks/dialog-ref.mock';
import { of } from 'rxjs';

describe('SavesComponent', () => {
  let component: SavesComponent;

  beforeEach(() => {
    component = new SavesComponent(
      dialogRefMock,
      nuzlockeServiceMock,
      routerServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get saves on init', async () => {
    routerServiceMock.id = null;
    nuzlockeServiceMock.getSaves = jest.fn(() => Promise.resolve([{ id: 1 }]));
    await component.ngOnInit();
    expect(nuzlockeServiceMock.getSaves).toBeCalled();
    expect(routerServiceMock.id).toBe(1);
  });

  test('should not set id if there are multiple', async () => {
    routerServiceMock.id = null;
    nuzlockeServiceMock.getSaves = jest.fn(() =>
      Promise.resolve([{ id: 1 }, { id: 2 }])
    );
    await component.ngOnInit();
    expect(nuzlockeServiceMock.getSaves).toBeCalled();
    expect(routerServiceMock.id).toBe(null);
  });

  test('should change tabs when you select a save', () => {
    routerServiceMock.changeTab = jest.fn();
    component.selectSave({ id: 1 } as any);
    expect(routerServiceMock.changeTab).toBeCalled();
  });

  test('should get status', () => {
    expect(component.getStatus(1)).toEqual('Failed');
  });

  test('should get game', () => {
    expect(component.getGame(1)).toBe(1);
  });

  test('should go to create', () => {
    routerServiceMock.changeTab = jest.fn();
    component.navigateToCreate();
    expect(routerServiceMock.changeTab).toBeCalled();
  });

  test('should handle long press cancel', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: jest.fn(() => of(null))
    }));
    component.loadSaves = jest.fn();
    component.onLongPress({} as any);

    expect(component.loadSaves).not.toBeCalled();
  });

  test('should handle long press delete', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: jest.fn(() => of({ delete: true }))
    }));

    component.loadSaves = jest.fn();
    nuzlockeServiceMock.deleteNuzlocke = jest.fn();
    component.onLongPress({} as any);

    expect(component.loadSaves).toBeCalled();
    expect(nuzlockeServiceMock.deleteNuzlocke).toBeCalled();
  });

  test('should handle long press no delete', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: jest.fn(() => of({ delete: false }))
    }));

    component.loadSaves = jest.fn();
    nuzlockeServiceMock.updateNuzlocke = jest.fn();
    component.onLongPress({} as any);

    expect(component.loadSaves).toBeCalled();
    expect(nuzlockeServiceMock.updateNuzlocke).toBeCalled();
  });
});
