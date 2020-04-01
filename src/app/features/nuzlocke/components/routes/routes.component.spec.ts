jest.mock('@util/enum');
import { RoutesComponent } from './routes.component';
import activatedRouteMock from '@mocks/activated-route.mock';
import nuzlockeServiceMock from '@features/nuzlocke/mocks/nuzlocke.service.mock';
import dialogRefMock from '@mocks/dialog-ref.mock';
import routesServiceMock from '@features/nuzlocke/mocks/routes.service.mock';
import { of } from 'rxjs';

describe('RoutesComponent', () => {
  let component: RoutesComponent;

  beforeEach(() => {
    component = new RoutesComponent(
      activatedRouteMock,
      routesServiceMock,
      nuzlockeServiceMock,
      dialogRefMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should update available routes', () => {
    routesServiceMock.getRoutes = jest.fn(() =>
      Promise.resolve([{ location: 'a' }, { location: 'b' }])
    );
    component.updateAvailableRoutes({
      pokemon: [{ routeName: 'a' }],
      extraRoutes: []
    } as any);
  });

  test('should setup on init', async () => {
    activatedRouteMock.data = of({ nuzlocke: null });
    component.updateAvailableRoutes = jest.fn();
    await component.ngOnInit();
    expect(component.updateAvailableRoutes).toBeCalled();
  });

  test('should add route', () => {
    component.routes = [];
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ current: true })
    }));
    nuzlockeServiceMock.convertRouteDialogToRoute = jest.fn(() => 1);
    nuzlockeServiceMock.addRouteToCurrentGame = jest.fn();
    component.addRoute();
    expect(component.routes.length).toBe(1);
  });

  test('should add route permanently', () => {
    component.routes = [];
    dialogRefMock.open = jest.fn(() => ({
      afterClosed: () => of({ current: false })
    }));
    nuzlockeServiceMock.convertRouteDialogToRoute = jest.fn(() => 1);
    routesServiceMock.addRouteToGame = jest.fn();
    component.addRoute();
    expect(component.routes.length).toBe(1);
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
});
