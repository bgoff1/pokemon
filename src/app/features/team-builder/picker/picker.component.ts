import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { FilterService } from '@shared/services/filter/filter.service';
import { TeamService } from '@shared/services/team/team.service';

@Component({
  selector: 'picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  team: Pokemon[] = [];
  pokemon: Pokemon[] = [];
  constructor(
    private readonly filterService: FilterService,
    private readonly teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService.teamChange$.subscribe(team => {
      this.team = team;
      this.pokemon = this.filterService.pokemonNotInTeam;
    });
    this.filterService.filterChange$.subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  addPokemon(pokemon: Pokemon): void {
    this.teamService.addToTeam(pokemon);
  }
}
