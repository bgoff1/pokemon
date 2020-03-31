import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { Pokemon, PokemonInterface } from '@models/pokemon';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { FilterService } from '../filter/filter.service';
import { PokemonList } from '../../models/list/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team: Pokemon[] = this.loadTeam();
  pokemon: Pokemon[] = [];
  private pokemonChange = new Subject<Pokemon[]>();
  private teamChange: BehaviorSubject<Pokemon[]>;

  private pokemonList: PokemonList;

  constructor(
    private readonly filterService: FilterService,
    private readonly pokemonService: PokemonService
  ) {
    this.teamChange = new BehaviorSubject(this.team);
  }

  async fetchPokemon(): Promise<void> {
    await this.pokemonService.createDatabase();
    this.pokemonService.getPokemon().then(pokemon => {
      this.pokemonList = new PokemonList(pokemon);
    });
  }

  async fetchFilters(): Promise<void> {
    await this.filterService.createDatabase();
    await this.fetchPokemon();
    this.filterService.getFilters().then(filters => {
      this.pokemonChange.next(this.pokemonList.callFilters(filters, this.team));
    });
  }

  private loadTeam(): Pokemon[] {
    const team = JSON.parse(localStorage.getItem('team')) || [];
    this.team = team.map((member: PokemonInterface) => new Pokemon(member));
    return this.team;
  }

  private updateTeam(): void {
    this.teamChange.next(this.team);
    if (this.filterService.checkingCoverage) {
      this.filterService.checkCoverage(this.team);
    }
    localStorage.setItem('team', JSON.stringify(this.team));
    this.filterService.getFilters().then(filters => {
      this.pokemonChange.next(this.pokemonList.callFilters(filters, this.team));
    });
  }

  addToTeam(pokemon: Pokemon): void {
    if (this.team.length < 6) {
      this.team.unshift();
      this.team.push(pokemon);
      this.updateTeam();
    }
  }

  removeFromTeam(pokemon: Pokemon): void {
    if (this.team.length > 0) {
      this.team = this.team.filter(({ name }) => pokemon.name !== name);
      this.updateTeam();
    }
  }

  get teamChange$() {
    return this.teamChange.asObservable();
  }

  get pokemonChange$() {
    return this.pokemonChange.asObservable();
  }
}
