```typescript
POKEMON.ts;
export abstract class AbstractPokemon implements PokemonInterface {
  name: string;
  genderRate: number;
  isBaby: boolean;
  hatchCounter: number;
  growthRate: string;
  pokedexNumbers: Pokedex[];
  eggGroups: string[];
  evolutionChain: number;
  varieties: Variety[];
  abilities: Ability[];
  forms: string[];
  gameIndices: GameIndex[];
  stats: Statistics;
  types: Type[];
  generation: string;
  constructor(pokemon?: PokemonInterface) {
    if (pokemon) {
      this.name = pokemon.name;
      this.pokedexNumbers = pokemon.pokedexNumbers;
      this.types = pokemon.types;
      this.generation = pokemon.generation;
      this.evolutionChain = pokemon.evolutionChain;
    }
  }

  // Adds data for full info, not required at this time
  addFullInterface(pokemon?: FullPokemonInterface) {
    if (pokemon) {
      this.genderRate = pokemon.genderRate;
      this.isBaby = pokemon.isBaby;
      this.hatchCounter = pokemon.hatchCounter;
      this.growthRate = pokemon.growthRate;
      this.eggGroups = pokemon.eggGroups;
      this.varieties = pokemon.varieties;
      this.abilities = pokemon.abilities;
      this.forms = pokemon.forms;
      this.stats = pokemon.stats;
    }
  }
}

export interface PokemonInterface {
  name: string;
  pokedexNumbers: Pokedex[];
  evolutionChain: number;
  types: Type[];
  generation: string;
}

// Data for full info, not required at this time
export interface FullPokemonInterface extends PokemonInterface {
  name: string;
  genderRate: number;
  isBaby: boolean;
  hatchCounter: number;
  growthRate: string;
  pokedexNumbers: Pokedex[];
  eggGroups: string[];
  evolutionChain: number;
  varieties: Variety[];
  abilities: Ability[];
  forms: string[];
  stats: Statistics;
  types: Type[];
  generation: string;
}
```

```
MOVE.ts
import { VersionGroup } from './version-group';

enum MoveLearnMethod {
  egg,
  machine,
  tutor,
  levelUp
}

export interface Move {
  move: string;
  versionGroupDetails: LearnGroupDetails;
}

interface LearnGroupDetails {
  levelLearnedAt: number;
  moveLearnMethod: MoveLearnMethod;
  versionGroup: VersionGroup;
}
```

```
VERSION-GROUP.ts
export enum VersionGroup {
  RedBlue,
  Yellow,
  GoldSilver,
  Crystal,
  RubySapphire,
  Emerald,
  FireRedLeafGreen,
  DiamondPearl,
  Platinum,
  HeartGoldSoulSilver,
  BlackWhite,
  Black2White2,
  XY,
  OmegaRubyAlphaSapphire,
  SunMoon,
  UltraSunUltraMoon
}
```

```
VERSION.ts
export enum Version {
  Red,
  Blue,
  Yellow,
  Gold,
  Silver,
  Crystal,
  Ruby,
  Sapphire,
  Emerald,
  FireRed,
  LeafGreen,
  Diamond,
  Pearl,
  Platinum,
  HeartGold,
  SoulSilver,
  Black,
  White,
  Black2,
  White2,
  X,
  Y,
  OmegaRuby,
  AlphaSapphire,
  Sun,
  Moon,
  UltraSun,
  UltraMoon
}
```
