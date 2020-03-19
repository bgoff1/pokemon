import { NameReplacementUtility } from '@models/util/name/name-util.model';
import { PokemonInterface, AbstractPokemon } from './pokemon';
import { Type } from './type';
export * from './pokemon';

export class Pokemon extends AbstractPokemon {
  cssClasses: string;
  constructor(pokemon?: PokemonInterface) {
    if (pokemon) {
      super(pokemon);
      const types = this.types.map(t => Type[t].toLowerCase());
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

  get imageName() {
    return NameReplacementUtility.replaceImageCharacters(this.name);
  }

  get displayName() {
    return NameReplacementUtility.getDisplayName(this.name);
  }

  equals(other: Pokemon) {
    return this.imageName === other.imageName;
  }
}
