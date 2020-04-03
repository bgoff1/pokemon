import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { firstNum } from '@util/select';
import { TeamService } from '@team/services/team/team.service';

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
      this.team = team.filter(({ name }) => name !== 'Empty Team Member');
      while (this.team.length < 6) {
        this.team.push(new Pokemon());
      }
    });
  }

  removeFromTeam(pokemon: Pokemon): void {
    this.teamService.removeFromTeam(pokemon);
  }

  getRow(pokemon: Pokemon): 1 | 2 {
    return this.team.indexOf(pokemon) < 3 ? 1 : 2;
  }

  get firstThree() {
    return firstNum(this.team, 3);
  }

  get lastThree() {
    return firstNum(this.team, 3, 3);
  }
}
