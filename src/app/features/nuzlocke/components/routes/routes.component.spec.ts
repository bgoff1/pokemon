jest.mock('@util/enum');
import { RoutesComponent } from './routes.component';
import activatedRouteMock from '@mocks/activated-route.mock';
import nuzlockeServiceMock from '@features/nuzlocke/mocks/nuzlocke.service.mock';
import dialogRefMock from '@mocks/dialog-ref.mock';
import routesServiceMock from '@features/nuzlocke/mocks/routes.service.mock';
import { of } from 'rxjs';

describe('Routes Component', () => {
  let component: RoutesComponent;

  beforeEach(() => {
    component = new RoutesComponent(
      activatedRouteMock,
      routesServiceMock,
      nuzlockeServiceMock,
      dialogRefMock
    );
    component.nuzlocke = {} as any;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should update available routes', async () => {
    routesServiceMock.getRoutes = jest.fn(() =>
      Promise.resolve([{ location: 'a' }, { location: 'b' }])
    );
    component.nuzlocke = {
      pokemon: [{ routeName: 'a' }],
      extraRoutes: [],
      ignoreRoutes: []
    } as any;
    localStorage.setItem = jest.fn();
    await component.updateAvailableRoutes();
    expect(component.routes.length).toBe(1);
  });

  test('should not filter on updating routes', async () => {
    routesServiceMock.getRoutes = jest.fn(() =>
      Promise.resolve([{ location: 'a' }, { location: 'b' }])
    );
    component.nuzlocke = {
      pokemon: [{ routeName: 'a' }],
      extraRoutes: [],
      ignoreRoutes: [{ id: 1 }]
    } as any;
    await component.updateAvailableRoutes(false);
    expect(component.routes.length).toBe(2);
  });

  test('should setup on init (storage return true)', async () => {
    activatedRouteMock.data = of({ nuzlocke: null });
    component.updateAvailableRoutes = jest.fn();
    localStorage.getItem = jest.fn(() => 'true');
    await component.ngOnInit();
    expect(component.updateAvailableRoutes).toBeCalledWith(true);
  });

  test('should setup on init', async () => {
    activatedRouteMock.data = of({ nuzlocke: null });
    component.updateAvailableRoutes = jest.fn();
    localStorage.getItem = jest.fn(() => 'false');
    await component.ngOnInit();
    expect(component.updateAvailableRoutes).toBeCalledWith(false);
  });

  test('should default call true', async () => {
    activatedRouteMock.data = of({ nuzlocke: null });
    component.updateAvailableRoutes = jest.fn();
    localStorage.getItem = jest.fn(() => null);
    await component.ngOnInit();
    expect(component.updateAvailableRoutes).toBeCalledWith(true);
  });

  test('should add route', () => {
    component.routes = [];
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ current: true })
    }));
    nuzlockeServiceMock.addRouteToCurrentGame = jest.fn();
    component.updateAvailableRoutes = jest.fn();
    component.addRoute();
    expect(component.updateAvailableRoutes).toBeCalled();
    expect(nuzlockeServiceMock.addRouteToCurrentGame).toBeCalled();
  });

  test('should add route permanently', () => {
    component.routes = [];
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ current: false })
    }));
    routesServiceMock.addRouteToGame = jest.fn();
    component.updateAvailableRoutes = jest.fn();
    component.addRoute();
    expect(component.updateAvailableRoutes).toBeCalled();
    expect(routesServiceMock.addRouteToGame).toBeCalled();
  });

  test('should do nothing if observable is falsy', () => {
    component.routes = [];
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of(false)
    }));
    component.addRoute();
    expect(component.routes.length).toBe(0);
  });

  test('should properly add encounter', async () => {
    component.routes = [{ location: 'a' }] as any;
    nuzlockeServiceMock.addEncounter = jest.fn(() => Promise.resolve());
    await component.addEncounter({} as any, { location: 'a' } as any);
    expect(component.routes.length).toBe(0);
  });

  test('should select route', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ current: true })
    }));
    nuzlockeServiceMock.addEncounter = jest.fn(() => Promise.resolve());
    component.addEncounter = jest.fn();

    component.selectRoute({
      location: 'a'
    } as any);
    expect(component.addEncounter).toBeCalled();
  });

  test('should add missed pokemon', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ caught: true })
    }));
    nuzlockeServiceMock.addEncounter = jest.fn(() => Promise.resolve());
    component.addEncounter = jest.fn();

    component.selectRoute({
      location: 'a'
    } as any);
    expect(component.addEncounter).toBeCalled();
  });

  test('should do nothing if select observable is falsy', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of(false)
    }));
    component.addEncounter = jest.fn();

    component.selectRoute({} as any);
    expect(component.addEncounter).not.toBeCalled();
  });

  test('should show and handle delete for only current', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ onlyFromCurrent: true })
    }));
    nuzlockeServiceMock.removeRouteFromRun = jest.fn();
    component.updateAvailableRoutes = jest.fn();

    component.showDelete({
      location: 'a'
    } as any);
    expect(component.updateAvailableRoutes).toBeCalled();
    expect(nuzlockeServiceMock.removeRouteFromRun).toBeCalled();
  });

  test('should handle delete for all', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ onlyFromCurrent: false })
    }));
    routesServiceMock.removeRouteFromGame = jest.fn();
    component.updateAvailableRoutes = jest.fn();

    component.showDelete({
      location: 'a'
    } as any);
    expect(component.updateAvailableRoutes).toBeCalled();
    expect(routesServiceMock.removeRouteFromGame).toBeCalled();
  });

  test('should handle delete with exit', () => {
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of(null)
    }));

    component.updateAvailableRoutes = jest.fn();

    component.showDelete({
      location: 'a'
    } as any);
    expect(component.updateAvailableRoutes).not.toBeCalled();
  });
});
