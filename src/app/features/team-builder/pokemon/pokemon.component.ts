import { Component, Input } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { NameStyle, TypeStyle } from '../models/styles.model';
import { Type } from '@models/pokemon/type';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;
  @Input() row: 1 | 2;

  get nameStyle(): NameStyle {
    return {
      'pokemon-name': this.row === 1,
      'inline-block': true
    };
  }

  get imageUrl(): string {
    return this.empty ? '' : `assets/pokemon/${this.pokemon.imageName}.png`;
  }

  get imageAlt(): string {
    return this.empty ? '' : this.pokemon.name;
  }

  get typeStyle(): TypeStyle {
    return {
      'pokemon-type': this.row === 1,
      'no-wrap': true
    };
  }

  get empty() {
    return this.pokemon.name === 'Empty Team Member';
  }

  get types() {
    return this.pokemon.types.map(type => Type[type].toLowerCase());
  }
}
