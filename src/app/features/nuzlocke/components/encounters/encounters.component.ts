import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '@features/nuzlocke/models/route-data.model';
import { NameUtility } from '@util/name';
import { NuzlockePokemon } from '@features/nuzlocke/models/nuzlocke-pokemon.model';

@Component({
  selector: 'encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
  encounters: NuzlockePokemon[] = [];
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ nuzlocke }: RouteData) => {
      this.encounters = nuzlocke.pokemon;
    });
  }

  getPokemonImage(pokemonName: string): string {
    const imageName = NameUtility.replaceImageCharacters(pokemonName);
    return `assets/pokemon/${imageName}.png`;
  }
}
