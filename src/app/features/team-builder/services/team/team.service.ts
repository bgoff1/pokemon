import { Injectable } from '@angular/core';
import { Pokemon, PokemonInterface } from '@models/pokemon';
import { PokemonService } from '../../../../shared/services/pokemon/pokemon.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FilterService } from '../filter/filter.service';
import { PokemonFilterService } from '../pokemon-filter/pokemon-filter.service';

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
    private readonly pokemonFilterService: PokemonFilterService
  ) {
    this.teamChange = new BehaviorSubject(this.loadTeam());
  }

  async fetchPokemon(): Promise<void> {
    await this.pokemonService.createDatabase();
    const pokemon = await this.pokemonService.getPokemon();
    this.pokemonFilterService.setPokemon(pokemon);
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

  private updateTeam(removeSearchFilter = false): void {
    this.teamChange.next(this.team);
    if (this.filterService.checkingCoverage) {
      this.filterService.checkCoverage(this.team);
    }
    this.setLocalStorage();
    this.sendTeamChange(removeSearchFilter);
  }

  async sendTeamChange(removeSearchFilter = false): Promise<void> {
    if (this.pokemonFilterService.alive) {
      const filters = await this.filterService.getFilters();
      this.pokemonChange.next(
        this.pokemonFilterService.callFilters(
          filters,
          this.team,
          removeSearchFilter
        )
      );
    }
  }

  addToTeam(pokemon?: Pokemon, update = true): void {
    if (this.team.length < 6 && pokemon) {
      this.team.unshift();
      this.team.push(pokemon);
      if (update) {
        this.updateTeam(true);
      }
    }
  }

  setLocalStorage(): void {
    localStorage.setItem('team', JSON.stringify(this.team));
  }

  async exportToTeamBuilder(members: string[]): Promise<void> {
    this.team = [];
    await this.pokemonService.createDatabase();
    const pokemon = await this.pokemonService.getPokemon();
    for (const member of members) {
      const memberToAdd = pokemon.find(
        (mon) => mon.name.toLowerCase() === member.toLowerCase()
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

  requestUpdate(): void {
    this.loadTeam();
    this.teamChange.next(this.team);
  }

  get teamChange$(): Observable<Pokemon[]> {
    return this.teamChange.asObservable();
  }

  get pokemonChange$(): Observable<Pokemon[]> {
    return this.pokemonChange.asObservable();
  }
}
