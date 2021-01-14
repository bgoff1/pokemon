import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import pokemon from '@resources/pokemon';
import { DatabaseService } from '@services/database/database.service';
import { NameUtility, titlecase } from '@util/name';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private readonly databaseService: DatabaseService) {}

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

  async getPokemon() {
    return (await this.databaseService.pokemon.toArray()).map(
      row => new Pokemon(row)
    );
  }

  async getPokemonNames() {
    return (await this.databaseService.pokemon.toArray()).map(row =>
      titlecase(row.name)
    );
  }

  async find(names: string[]) {
    return (await this.getPokemon()).filter(mon =>
      names.some(name =>
        NameUtility.replaceImageCharacters(mon.name)
          .toLowerCase()
          .includes(name.toLowerCase())
      )
    );
  }

  async findEvolutionNames(name: string): Promise<string[]> {
    const pokemonToFind = await this.databaseService.pokemon
      .where({ name: NameUtility.reverseImageReplace(name.toLowerCase()) })
      .toArray();

    const siblings = (
      await this.databaseService.pokemon
        .where({
          evolutionChain: pokemonToFind[0]?.evolutionChain || -1
        })
        .toArray()
    )
      .map(sibling => sibling && titlecase(sibling.name))
      .filter(
        mon =>
          mon &&
          mon !== titlecase(NameUtility.reverseImageReplace(name.toLowerCase()))
      );

    return siblings;
  }
}
