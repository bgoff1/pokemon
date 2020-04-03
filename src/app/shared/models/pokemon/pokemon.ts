import { Pokedex } from './pokedex';
import { Type } from './type';
import { Region } from './region';

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
    }
  }

  getNationalPokedex() {
    return this.pokedexNumbers.find(dex => dex.name === Region.National);
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
