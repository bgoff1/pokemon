import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HideFormPipe } from './hide-form.pipe';
import { PokemonImagePipe } from './pokemon-image.pipe';
import { RoutePipe } from './route.pipe';

@NgModule({
  declarations: [RoutePipe, PokemonImagePipe, HideFormPipe],
  imports: [CommonModule],
  exports: [RoutePipe, PokemonImagePipe, HideFormPipe]
})
export class PipesModule {}
