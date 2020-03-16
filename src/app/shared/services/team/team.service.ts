import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { PokemonInterface } from '@models/pokemon/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team: Pokemon[] = this.loadTeam();
  private teamChange: BehaviorSubject<Pokemon[]> = new BehaviorSubject(
    this.team
  );

  get teamChange$() {
    return this.teamChange.asObservable();
  }

  private loadTeam(): Pokemon[] {
    const team = JSON.parse(localStorage.getItem('team')) || [];
    this.team = team.map((member: PokemonInterface) => new Pokemon(member));
    this.addEmptyMembers();
    return this.team;
  }

  private updateTeam() {
    this.teamChange.next(this.team);
    this.removeEmptyMembers();
    localStorage.setItem('team', JSON.stringify(this.team));
    this.addEmptyMembers();
  }

  addToTeam(pokemon: Pokemon) {
    this.removeEmptyMembers();
    if (this.team.length < 6) {
      this.team.push(pokemon);
    }
    this.addEmptyMembers();
    this.updateTeam();
  }

  removeEmptyMembers() {
    this.team = this.team.filter(
      teamMember => teamMember.name !== 'Empty Team Member'
    );
  }

  addEmptyMembers() {
    while (this.team.length < 6) {
      this.team.push(new Pokemon());
    }
  }

  removeFromTeam(pokemon: Pokemon) {
    this.removeEmptyMembers();
    if (this.team.length > 0) {
      this.team = this.team.filter(
        teamMember => pokemon.name !== teamMember.name
      );
    }
    this.addEmptyMembers();
    this.updateTeam();
  }
}
