import { Pipe, PipeTransform } from '@angular/core';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';

@Pipe({
  name: 'image'
})
export class PokemonImagePipe implements PipeTransform {
  constructor(private readonly pokemonImageService: PokemonImageService) {}
  transform(value: string | undefined): string {
    if (!value || value === 'Empty-Team Member') {
      return '';
    }
    const imageName = this.pokemonImageService.transform(value);
    return `assets/pokemon/${imageName}.png`;
  }
}
