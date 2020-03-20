import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Component({
  selector: 'picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  filtersLoading = true;
  pokemon: Pokemon[] = [];
  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.fetchFilters().then(() => {
      this.pokemonService.pokemonChange$.subscribe(all => {
        this.filtersLoading = false;
        this.pokemon = all;
      });
    });
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemonService.addToTeam(pokemon);
  }
}
