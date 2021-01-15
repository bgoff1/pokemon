import { Injectable } from '@angular/core';
import { Pokemon, PokemonInterface } from '@models/pokemon';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { PokemonListService } from '@team/models/list/pokemon-list.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team: Pokemon[] = this.loadTeam();
  pokemon: Pokemon[] = [];
  private pokemonChange = new Subject<Pokemon[]>();
  private teamChange: BehaviorSubject<Pokemon[]>;

  constructor(
    private readonly filterService: FilterService,
    private readonly pokemonService: PokemonService,
    private readonly pokemonListService: PokemonListService
  ) {
    this.teamChange = new BehaviorSubject(this.loadTeam());
  }

  async fetchPokemon(): Promise<void> {
    await this.pokemonService.createDatabase();
    const pokemon = await this.pokemonService.getPokemon();
    this.pokemonListService.setPokemon(pokemon);
  }

  async fetchFilters(): Promise<void> {
    await this.fetchPokemon();
    await this.sendTeamChange();
  }

  private loadTeam(): Pokemon[] {
    const team = JSON.parse(localStorage.getItem('team') || '[]');
    this.team = team.map((member: PokemonInterface) => new Pokemon(member));
    return this.team;
  }

  private updateTeam(): void {
    this.teamChange.next(this.team);
    if (this.filterService.checkingCoverage) {
      this.filterService.checkCoverage(this.team);
    }
    this.setLocalStorage();
    this.sendTeamChange();
  }

  async sendTeamChange() {
    if (this.pokemonListService.alive) {
      const filters = await this.filterService.getFilters();
      this.pokemonChange.next(
        this.pokemonListService.callFilters(filters, this.team)
      );
    }
  }

  addToTeam(pokemon: Pokemon, update = true): void {
    if (this.team.length < 6 && pokemon) {
      this.team.unshift();
      this.team.push(pokemon);
      if (update) {
        this.updateTeam();
      }
    }
  }

  setLocalStorage() {
    localStorage.setItem('team', JSON.stringify(this.team));
  }

  async exportToTeamBuilder(members: string[]) {
    this.team = [];

    await this.pokemonService.createDatabase();
    const pokemon = await this.pokemonService.getPokemon();

    for (const member of members) {
      const memberToAdd = pokemon.find(
        mon => mon.name.toLowerCase() === member.toLowerCase()
      );

      this.addToTeam(memberToAdd, false);
    }

    this.setLocalStorage();
  }

  removeFromTeam(pokemon: Pokemon): void {
    if (this.team.length > 0) {
      this.team = this.team.filter(({ name }) => pokemon.name !== name);
      this.updateTeam();
    }
  }

  requestUpdate() {
    this.loadTeam();
    this.teamChange.next(this.team);
  }

  get teamChange$() {
    return this.teamChange.asObservable();
  }

  get pokemonChange$() {
    return this.pokemonChange.asObservable();
  }
}
