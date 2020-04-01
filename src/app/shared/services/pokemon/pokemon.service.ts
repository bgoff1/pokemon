import { Injectable } from '@angular/core';
import { DatabaseService } from '@services/database/database.service';
import { Pokemon } from '@models/pokemon';
import pokemon from '@resources/pokemon';
import { NameUtility } from '@util/name';

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

  async find(names: string[]) {
    return (await this.getPokemon()).filter(mon =>
      names.some(name =>
        NameUtility.replaceImageCharacters(mon.name)
          .toLowerCase()
          .includes(name.toLowerCase())
      )
    );
  }
}
