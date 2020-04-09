jest.mock('@models/pokemon/game-groups', () => ({
  __esModule: true,
  getRegionFromGame: jest.fn(() => 0)
}));
import { BadgeService } from './badge.service';
import nuzlockeServiceMock from '@features/nuzlocke/mocks/nuzlocke.service.mock';
import { getRegionFromGame } from '@models/pokemon/game-groups';

describe('Badge Service', () => {
  let service: BadgeService;

  beforeEach(() => {
    service = new BadgeService(nuzlockeServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get badges', () => {
    const badges = service.getBadges({ game: 1 } as any);
    expect(nuzlockeServiceMock.currentRun).toEqual({
      game: 1
    });
    expect(badges.length).toBe(8);
  });

  test('should get 16 badges for johto', () => {
    (getRegionFromGame as any) = jest.fn(() => 1);
    const badges = service.getBadges({ game: 1, badgesEarned: [1] } as any);
    expect(nuzlockeServiceMock.currentRun).toEqual({
      game: 1,
      badgesEarned: [1]
    });
    expect(badges.length).toBe(16);
  });
});
