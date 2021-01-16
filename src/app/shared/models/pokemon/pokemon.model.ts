import { Pokedex } from './pokedex.model';
import { Type } from './type.model';
import { Region } from './region.model';

export abstract class AbstractPokemon implements PokemonInterface {
  name: string;
  pokedexNumbers: Pokedex[];
  evolutionChain: number;
  types: Type[];
  generation: string;
  constructor(pokemon?: PokemonInterface) {
    if (pokemon) {
      this.name = pokemon.name;
      this.pokedexNumbers = pokemon.pokedexNumbers;
      this.types = pokemon.types;
      this.generation = pokemon.generation;
      this.evolutionChain = pokemon.evolutionChain;
    } else {
      this.name = '';
      this.pokedexNumbers = [];
      this.evolutionChain = -1;
      this.types = [];
      this.generation = '';
    }
  }

  getNationalPokedex(): Pokedex | undefined {
    return this.pokedexNumbers.find((dex) => dex.name === Region.National);
  }
}

export interface PokemonInterface {
  id?: number;
  name: string;
  pokedexNumbers: Pokedex[];
  evolutionChain: number;
  types: Type[];
  generation: string;
}
