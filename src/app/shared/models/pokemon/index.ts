import { AbstractPokemon, PokemonInterface } from './pokemon.model';
import { Type } from './type.model';
export * from './pokemon.model';

export class Pokemon extends AbstractPokemon {
  cssClasses: string;
  constructor(pokemon?: PokemonInterface) {
    if (pokemon) {
      super(pokemon);
      const types = this.types.map((t) => Type[t].toLowerCase());
      this.cssClasses =
        this.types.length === 1
          ? `circle ${types[0]}`
          : `circle ${types[0]}-primary ${types[1]}-secondary`;
    } else {
      super();
      this.name = 'Empty Team Member';
      this.types = [Type.Unknown, Type.Unknown];
      this.cssClasses = 'empty-team-member';
    }
  }

  equals(other: Pokemon): boolean {
    return this.name === other.name;
  }
}
