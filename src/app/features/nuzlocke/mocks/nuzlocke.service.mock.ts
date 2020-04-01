import { of } from 'rxjs';

export default {
  gameNames: [{ game: 1 }],
  createNuzlocke: jest.fn(() => Promise.resolve({ id: 1 })),
  update$: of({
    id: 1,
    runName: 'string',
    game: 1,
    random: true,
    startDate: new Date(),
    badgesEarned: [],
    extraRoutes: [],
    pokemon: [],
    status: 0
  })
} as any;
