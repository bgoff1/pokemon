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
    if (value.toLowerCase().includes('char')) {
      console.log(
        value,
        NameUtility.replaceImageCharacters(value.toLowerCase())
      );
    }
    const imageName = NameUtility.replaceImageCharacters(value.toLowerCase());
    return `assets/pokemon/${imageName}.png`;
  }
}
