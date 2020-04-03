import { Pipe, PipeTransform } from '@angular/core';
import { NameUtility } from '@util/name';

@Pipe({
  name: 'pokemonImage'
})
export class PokemonImagePipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value === 'Empty-Team Member') {
      return '';
    }
    const imageName = NameUtility.replaceImageCharacters(value);
    return `assets/pokemon/${imageName}.png`;
  }
}
