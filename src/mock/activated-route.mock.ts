import { of } from 'rxjs';

export const activatedRouteMock = {
  data: of({ nuzlocke: { pokemon: [{ status: 0 }], extraRoutes: [] } })
};
