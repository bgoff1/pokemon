import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { PokemonImageService } from '../pokemon-image/pokemon-image.service';
import pokemon from '@resources/pokemon';
import { Pokemon } from '../../models/pokemon';
import { TitleCaseService } from '../titlecase/titlecase.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly pokemonImageService: PokemonImageService,
    private readonly titleCaseService: TitleCaseService
  ) {}
  async createDatabase(): Promise<void> {
    const count = await this.databaseService.pokemon.count();
    if (count === 0) {
      await this.databaseService.pokemon.bulkAdd(
        pokemon.map((mon, index) => {
          return {
            ...mon,
            id: index
          };
        })
      );
    }
  }
  async getPokemon(): Promise<Pokemon[]> {
    return this.databaseService.pokemon
      .toArray()
      .then((rows) => rows.map((entry) => new Pokemon(entry)));
  }
  async getPokemonNames(): Promise<string[]> {
    return this.databaseService.pokemon
      .toArray()
      .then((rows) =>
        rows.map((entry) => this.titleCaseService.titlecase(entry.name))
      );
  }
  async find(names: string[]): Promise<Pokemon[]> {
    return this.getPokemon().then((allPokemon) =>
      allPokemon.filter((mon) =>
        names.some((name) =>
          this.pokemonImageService
            .transform(mon.name)
            .toLowerCase()
            .includes(name.toLowerCase())
        )
      )
    );
  }
  async findEvolutionNames(name: string): Promise<string[]> {
    const pokemonToFind = await this.databaseService.pokemon
      .where({
        name: this.pokemonImageService.reverseImageReplace(name.toLowerCase())
      })
      .toArray();
    const siblings = (
      await this.databaseService.pokemon
        .where({
          evolutionChain: pokemonToFind[0]?.evolutionChain || -1
        })
        .toArray()
    )
      .map(
        (sibling) => sibling && this.titleCaseService.titlecase(sibling.name)
      )
      .filter(
        (mon) =>
          mon &&
          mon !==
            this.titleCaseService.titlecase(
              this.pokemonImageService.reverseImageReplace(name.toLowerCase())
            )
      );
    return siblings;
  }
}
