import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { TeamService } from '@services/team/team.service';

@Component({
  selector: 'picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  team: Pokemon[] = [];
  pokemon: Promise<Pokemon[]>;
  constructor(private readonly teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.teamChange$.subscribe(team => {
      this.team = team;
    });
    this.pokemon = this.teamService.pokemon;
  }

  addPokemon(pokemon: Pokemon): void {
    this.teamService.addToTeam(pokemon);
  }
}
