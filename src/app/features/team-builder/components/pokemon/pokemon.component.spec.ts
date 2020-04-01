jest.mock('@util/enum');
import { PokemonComponent } from './pokemon.component';
import { Type } from '@models/pokemon/type';

describe('Pokemon Component', () => {
  let component: PokemonComponent;

  beforeEach(() => {
    component = new PokemonComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should tell if the pokemon is empty', () => {
    component.pokemon = {
      name: 'Empty Team Member'
    } as any;
    expect(component.empty).toBe(true);
  });

  test('should tell if the pokemon is not empty', () => {
    component.pokemon = {
      name: ' a Empty Team Member'
    } as any;
    expect(component.empty).toBe(false);
  });

  test('should get if it is on row 1', () => {
    component.row = 1;
    expect(component.rowOne).toBe(true);
    component.row = 2;
    expect(component.rowOne).toBe(false);
  });

  test('should get no image alternate for an empty member', () => {
    component.pokemon = {
      name: 'Empty Team Member'
    } as any;
    expect(component.imageAlt).toEqual('');
  });

  test('should get image alternate text', () => {
    component.pokemon = {
      name: 'A Empty Team Member'
    } as any;
    expect(component.imageAlt).toBe(component.pokemon.name);
  });

  test('should get image url if not empty', () => {
    component.pokemon = {
      name: 'A Empty Team Member'
    } as any;
    expect(component.imageUrl).toContain('.png');
  });

  test('should get no image alternate for an empty member', () => {
    component.pokemon = {
      name: 'Empty Team Member'
    } as any;
    expect(component.imageUrl).toEqual('');
  });

  test('should get types as lower case', () => {
    component.pokemon = {
      types: [Type.Grass]
    } as any;
    expect(component.types).toEqual(['grass']);
  });
});
