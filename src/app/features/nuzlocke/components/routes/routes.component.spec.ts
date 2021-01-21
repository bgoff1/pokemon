import { activatedRouteMock } from '@mock/activated-route.mock';
import { matDialogMock } from '@mock/mat-dialog.mock';
import { nuzlockeServiceMock } from '@mock/nuzlocke.service.mock';
import { routesServiceMock } from '@mock/routes.service.mock';
import { RoutesComponent } from './routes.component';

describe('Nuzlocke: Routes Component', () => {
  let component: RoutesComponent;

  beforeEach(() => {
    component = new RoutesComponent(
      activatedRouteMock as any,
      routesServiceMock as any,
      nuzlockeServiceMock as any,
      matDialogMock as any
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update routes on init', async () => {
    component.updateAvailableRoutes = jest.fn(() => Promise.resolve());

    await component.ngOnInit();

    expect(component.updateAvailableRoutes).toHaveBeenCalledWith(true);
  });

  it('should use local storage for route filter', async () => {
    component.updateAvailableRoutes = jest.fn(() => Promise.resolve());
    localStorage.setItem('route filter', 'false');

    await component.ngOnInit();

    expect(component.updateAvailableRoutes).toHaveBeenCalledWith(false);
  });

  it('should update and filter out visited', async () => {
    component.nuzlocke = {
      extraRoutes: [],
      badgesEarned: [],
      random: false,
      runName: '',
      ignoreRoutes: [{ id: 1 }] as any,
      pokemon: [{ routeName: 'a' }] as any,
      game: 0,
      startDate: new Date(),
      status: 0
    };
    component.nuzlocke.extraRoutes = Array.from(Array(5)).map((_, i) => ({
      id: i,
      type: 1,
      order: 1,
      game: 1,
      location: i === 0 ? 'a' : 'a' + i,
      pokemon: []
    }));
    component.routes = [];
    await component.updateAvailableRoutes();
    expect(component.routes.length).not.toBe(0);
  });

  it('should update available routes', async () => {
    component.nuzlocke = {
      extraRoutes: [],
      badgesEarned: [],
      random: false,
      runName: '',
      ignoreRoutes: [{ id: 1 }] as any,
      pokemon: [{ routeName: 'a' }] as any,
      game: 0,
      startDate: new Date(),
      status: 0
    };
    component.nuzlocke.extraRoutes = Array.from(Array(5)).map((_, i) => ({
      id: i,
      type: 1,
      order: 1,
      game: 1,
      location: i === 0 ? 'a' : 'a' + i,
      pokemon: []
    }));
    component.routes = [];
    await component.updateAvailableRoutes(false);
    expect(component.routes.length).not.toBe(0);
  });

  it('should toggle sorting', () => {
    component.updateSortingMethod = jest.fn();
    component.toggleSortingMethod();
    expect(component.updateSortingMethod).toHaveBeenCalled();
  });

  it('should update sorting method', () => {});
});
