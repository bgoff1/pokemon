import { Injectable } from '@angular/core';
import { Filter, FilterProperties } from '@models/filter/filter.model';
import { Pokemon } from '@models/pokemon';
import { Subject } from 'rxjs/internal/Subject';
import pokemon from '@resources/pokemon';
import { PokemonList } from '@models/list/pokemon-list.model';
import { TeamService } from '@shared/services/team/team.service';
import defaultFilters from '@resources/default-filters';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterChange: Subject<Pokemon[]> = new Subject();
  private team: Pokemon[];
  checkingCoverage: boolean;

  private pokemonList: PokemonList = new PokemonList(
    pokemon.map(mon => new Pokemon(mon))
  );

  constructor(teamService: TeamService) {
    if (!this.filters) {
      this.filters = defaultFilters;
    }
    teamService.teamChange$.subscribe(team => {
      this.team = team;
      if (this.checkingCoverage) {
        const teamNoEmpty = this.team.filter(
          member => member.name !== 'Empty Team Member'
        );
        if (teamNoEmpty.length === 0) {
          this.checkingCoverage = false;
        }
        this.checkCoverage();
      }
    });
  }

  resetFilters() {
    this.filters = defaultFilters;
  }

  get filterChange$() {
    return this.filterChange.asObservable();
  }

  get filters() {
    return JSON.parse(localStorage.getItem('filters'));
  }
  set filters(filters: Filter[]) {
    localStorage.setItem('filters', JSON.stringify(filters));
  }

  get pokemon(): Pokemon[] {
    return this.pokemonList.callFilters(this.filters);
  }

  get isTeamMembers() {
    return this.team.filter(mon => mon.name !== 'Empty Team Member').length > 0;
  }

  get pokemonNotInTeam(): Pokemon[] {
    return this.pokemon.filter(
      mon =>
        !this.team
          .map(member => JSON.stringify(member))
          .includes(JSON.stringify(mon))
    );
  }

  checkCoverage() {
    this.filters = this.filters.filter(
      filter => filter.property !== FilterProperties.Coverage
    );
    if (this.checkingCoverage) {
      const coverageFilter: Filter = {
        property: FilterProperties.Coverage,
        value: JSON.stringify(
          this.team.filter(member => member.name !== 'Empty Team Member')
        )
      };
      this.filters = [...this.filters, coverageFilter];
      return coverageFilter;
    }
    this.filterChange.next(this.pokemonNotInTeam);
    return null;
  }
}
