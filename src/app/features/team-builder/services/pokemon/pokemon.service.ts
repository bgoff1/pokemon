import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { Pokemon, PokemonInterface } from '@models/pokemon';
import { FilterService } from '../../services/filter/filter.service';
import { PokemonList } from '../../models/list/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  team: Pokemon[] = this.loadTeam();
  pokemon: Pokemon[] = [];
  private pokemonChange = new Subject<Pokemon[]>();
  private teamChange: BehaviorSubject<Pokemon[]>;

  private pokemonList: PokemonList = new PokemonList();

  constructor(private readonly filterService: FilterService) {
    this.teamChange = new BehaviorSubject(this.team);
  }

  async fetchFilters(): Promise<void> {
    await this.filterService.createDatabase();
    this.filterService.getFilters().then(filters => {
      this.pokemonChange.next(
        this.pokemonList.callFilters(filters, this.nonEmptyMembers)
      );
    });
  }

  private loadTeam(): Pokemon[] {
    const team = JSON.parse(localStorage.getItem('team')) || [];
    this.team = team.map((member: PokemonInterface) => new Pokemon(member));
    this.addEmptyMembers();
    return this.team;
  }

  private updateTeam(): void {
    this.teamChange.next(this.team);
    if (this.filterService.checkingCoverage) {
      this.filterService.checkCoverage(this.nonEmptyMembers);
    }
    localStorage.setItem('team', JSON.stringify(this.nonEmptyMembers));
    this.filterService.getFilters().then(filters => {
      this.pokemonChange.next(
        this.pokemonList.callFilters(filters, this.nonEmptyMembers)
      );
    });
  }

  addToTeam(pokemon: Pokemon): void {
    if (this.nonEmptyMembers.length < 6) {
      this.team.pop();
      this.team.unshift(pokemon);
    }
    this.addEmptyMembers();
    this.updateTeam();
  }

  addEmptyMembers(): void {
    while (this.team.length < 6) {
      this.team.push(new Pokemon());
    }
  }

  removeFromTeam(pokemon: Pokemon): void {
    if (this.nonEmptyMembers.length > 0) {
      this.team = this.team.filter(
        teamMember => pokemon.name !== teamMember.name
      );
    }
    this.addEmptyMembers();
    this.updateTeam();
  }

  get teamChange$() {
    return this.teamChange.asObservable();
  }

  get pokemonChange$() {
    return this.pokemonChange.asObservable();
  }

  get nonEmptyMembers() {
    return this.team.filter(
      teamMember => teamMember.name !== 'Empty Team Member'
    );
  }
}
