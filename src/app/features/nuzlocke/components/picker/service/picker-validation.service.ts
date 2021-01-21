import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';

@Injectable({
  providedIn: 'root'
})
export class PickerValidationService {
  constructor(private readonly pokemonImageService: PokemonImageService) {}
  validate(control: AbstractControl, names: string[]): ValidationErrors | null {
    return names
      .map((name) => name.toLowerCase())
      .includes(
        this.pokemonImageService
          .reverseImageReplace(control.value)
          .toLowerCase()
      )
      ? null
      : { invalidPokemon: true };
  }
}
