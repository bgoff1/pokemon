import { DatabaseService } from './database.service';

describe('Database Service', () => {
  let service: DatabaseService;

  beforeEach(() => {
    service = new DatabaseService();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });
});
