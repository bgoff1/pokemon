import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Type } from '@models/pokemon/type';
import { TeamService } from '@team/services/team/team.service';
import { firstNum } from '@util/select';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  team: Pokemon[] = [];
  alive: boolean;
  constructor(private readonly teamService: TeamService) {}

  ngOnInit(): void {
    this.alive = true;
    this.teamService.requestUpdate();
    this.teamService.teamChange$
      .pipe(takeWhile(() => this.alive))
      .subscribe(team => {
        this.team = team.filter(({ name }) => name !== 'Empty Team Member');
        while (this.team.length < 6) {
          this.team.push(new Pokemon());
        }
      });
  }

  removeFromTeam(pokemon: Pokemon): void {
    this.teamService.removeFromTeam(pokemon);
  }

  getTypes(array: Pokemon[]) {
    return array
      .filter(item => item?.types)
      .map(item => item.types.map(type => Type[type].toLowerCase()));
  }

  getNames(array: Pokemon[]) {
    return array
      .filter(item => item?.displayName)
      .map(item => item.displayName);
  }

  getRow(pokemon: Pokemon): 1 | 2 {
    return this.team.indexOf(pokemon) < 3 ? 1 : 2;
  }

  get firstThree() {
    return firstNum(this.team, 3);
  }

  get firstThreeTypes() {
    return this.getTypes(this.firstThree);
  }

  get firstThreeNames() {
    return this.getNames(this.firstThree);
  }

  get lastThree() {
    return firstNum(this.team, 3, 3);
  }

  get lastThreeTypes() {
    return this.getTypes(this.lastThree);
  }

  get lastThreeNames() {
    return this.getNames(this.lastThree);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
