import { DatabaseService } from './database.service';

describe('Database Service', () => {
  let service: DatabaseService;

  beforeEach(() => {
    service = new DatabaseService();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should count the routes in game', () => {
    service.routes.where = jest.fn(() => ({ count: jest.fn(() => 1) })) as any;
    expect(service.countRoutesInGame('a')).toBe(1);
  });
});
