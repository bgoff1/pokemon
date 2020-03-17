import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FilterService } from '@services/filter/filter.service';
import { Pokemon } from '@models/pokemon';
import { PokemonInterface } from '@models/pokemon/pokemon';
import { PokemonList } from '@models/list/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team: Pokemon[] = this.loadTeam();
  private teamChange = new BehaviorSubject(this.team);

  private pokemonList: PokemonList = new PokemonList();

  constructor(private readonly filterService: FilterService) {}

  private loadTeam(): Pokemon[] {
    const team = JSON.parse(localStorage.getItem('team')) || [];
    this.team = team.map((member: PokemonInterface) => new Pokemon(member));
    this.addEmptyMembers();
    return this.team;
  }

  private updateTeam() {
    this.teamChange.next(this.team);
    if (this.filterService.checkingCoverage) {
      this.filterService.checkCoverage(this.nonEmptyMembers);
    }
    localStorage.setItem('team', JSON.stringify(this.nonEmptyMembers));
  }

  addToTeam(pokemon: Pokemon) {
    if (this.nonEmptyMembers.length < 6) {
      this.team.push(pokemon);
    }
    this.addEmptyMembers();
    this.updateTeam();
  }

  addEmptyMembers() {
    while (this.team.length < 6) {
      this.team.push(new Pokemon());
    }
  }

  removeFromTeam(pokemon: Pokemon) {
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

  get nonEmptyMembers() {
    return this.team.filter(
      teamMember => teamMember.name !== 'Empty Team Member'
    );
  }

  get pokemon(): Pokemon[] {
    console.log(this.filterService.filters, this.nonEmptyMembers);
    return this.pokemonList.callFilters(
      this.filterService.filters,
      this.nonEmptyMembers
    );
  }
}
