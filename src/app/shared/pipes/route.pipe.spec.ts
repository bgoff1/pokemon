import { RoutePipe } from './route.pipe';

describe('RoutePipe', () => {
  let pipe: RoutePipe;
  beforeAll(() => {
    pipe = new RoutePipe();
  });

  test('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  test('should remove -', () => {
    expect(pipe.transform('team-builder')).toEqual('Team Builder');
  });
});
