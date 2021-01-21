import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;

  beforeEach(() => {
    component = new PokemonComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
