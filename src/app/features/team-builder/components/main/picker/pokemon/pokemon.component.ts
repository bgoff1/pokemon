import { Component, Input } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Type } from '@models/pokemon/type.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;
  @Input() row?: 1 | 2;

  get imageUrl(): string {
    return this.empty ? '' : this.pokemon.name;
  }

  get imageAlt(): string {
    return this.empty ? '' : this.pokemon.name;
  }

  get rowOne(): boolean {
    return this.row === 1;
  }

  get empty(): boolean {
    return this.pokemon.name === 'Empty Team Member';
  }

  get types(): string[] {
    return this.pokemon.types.map((type) => Type[type].toLowerCase());
  }
}
