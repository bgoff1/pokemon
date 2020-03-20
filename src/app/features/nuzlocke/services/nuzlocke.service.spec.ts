import { NuzlockeService } from './nuzlocke.service';

describe('NuzlockeService', () => {
  let service: NuzlockeService;

  beforeEach(() => {
    service = new NuzlockeService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
