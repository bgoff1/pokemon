import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { TeamService } from '@shared/services/team/team.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: Pokemon[] = [];
  constructor(private readonly teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.teamChange$.subscribe(team => {
      this.team = team;
    });
  }

  removeFromTeam(pokemon: Pokemon): void {
    this.teamService.removeFromTeam(pokemon);
  }

  getRow(pokemon: Pokemon): 1 | 2 {
    return this.team.indexOf(pokemon) < 3 ? 1 : 2;
  }

  get firstThree() {
    return [this.team[0], this.team[1], this.team[2]];
  }

  get lastThree() {
    return [this.team[3], this.team[4], this.team[5]];
  }
}
