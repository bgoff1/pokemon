import { Coverage } from './coverage.model';
import { Type } from '@models/pokemon/type';

describe('Pokemon List', () => {
  let coverage: Coverage;

  beforeAll(() => {
    coverage = new Coverage();
  });

  test('should do simple comparisons (grass v water)', () => {
    expect(coverage.isCovered([Type.Grass], [Type.Water])).toBe(true);
  });

  test('should do simple comparisons (grass v grass)', () => {
    expect(coverage.isCovered([Type.Grass], [Type.Grass])).toBe(false);
  });

  test('should do simple team comparisons (grass v grass-flying)', () => {
    const teamTypes = [Type.Grass];
    const defenderTypes = [Type.Grass, Type.Flying];
    expect(coverage.isCovered(teamTypes, defenderTypes)).toBe(false);
  });

  test('should do team comparison (grass-fire v grass)', () => {
    expect(coverage.isCovered([Type.Grass, Type.Fire], [Type.Grass])).toBe(
      true
    );
  });

  test('should do complex comparison (psychic vs fighting-flying)', () => {
    const teamTypes = [Type.Psychic];
    const defenderTypes = [Type.Fighting, Type.Flying];
    expect(coverage.isCovered(teamTypes, defenderTypes)).toBe(true);
  });
});
