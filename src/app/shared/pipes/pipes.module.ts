import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePipe } from './route.pipe';
import { PokemonImagePipe } from './pokemon-image.pipe';

@NgModule({
  declarations: [RoutePipe, PokemonImagePipe],
  imports: [CommonModule],
  exports: [RoutePipe, PokemonImagePipe]
})
export class PipesModule {}
