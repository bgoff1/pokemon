import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { TeamService } from '../../services/team/team.service';

@Component({
  selector: 'picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  filtersLoading = true;
  pokemon: Pokemon[] = [];
  constructor(private readonly teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.fetchFilters().then(() => {
      this.teamService.pokemonChange$.subscribe(all => {
        this.filtersLoading = false;
        this.pokemon = all;
      });
    });
  }

  addPokemon(pokemon: Pokemon): void {
    this.teamService.addToTeam(pokemon);
  }
}
