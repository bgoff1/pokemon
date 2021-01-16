import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Type } from '@models/pokemon/type.model';
import { TeamService } from '@team/services/team/team.service';
import { firstNum } from '@util/select/select';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  team: Pokemon[] = [];
  alive = true;
  constructor(private readonly teamService: TeamService) {}

  ngOnInit(): void {
    this.alive = true;
    this.teamService.requestUpdate();
    this.teamService.teamChange$
      .pipe(takeWhile(() => this.alive))
      .subscribe((team) => {
        this.team = team.filter(({ name }) => name !== 'Empty Team Member');
        while (this.team.length < 6) {
          this.team.push(new Pokemon());
        }
      });
  }

  removeFromTeam(pokemon: Pokemon): void {
    this.teamService.removeFromTeam(pokemon);
  }

  getTypes(array: Pokemon[]): string[][] {
    return array
      .filter((item) => item?.types)
      .map((item) => item.types.map((type) => Type[type].toLowerCase()));
  }

  getNames(array: Pokemon[]): string[] {
    return array.filter((item) => item?.name).map((item) => item.name);
  }

  getRow(pokemon: Pokemon): 1 | 2 {
    return this.team.indexOf(pokemon) < 3 ? 1 : 2;
  }

  get firstThree(): Pokemon[] {
    return firstNum(this.team, 3);
  }

  get firstThreeTypes(): string[][] {
    return this.getTypes(this.firstThree);
  }

  get firstThreeNames(): string[] {
    return this.getNames(this.firstThree);
  }

  get lastThree(): Pokemon[] {
    return firstNum(this.team, 3, 3);
  }

  get lastThreeTypes(): string[][] {
    return this.getTypes(this.lastThree);
  }

  get lastThreeNames(): string[] {
    return this.getNames(this.lastThree);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
