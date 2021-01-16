import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePipe } from './route/route.pipe';
import { HideFormPipe } from './hide-form/hide-form.pipe';
import { PokemonImagePipe } from './image/image.pipe';

@NgModule({
  declarations: [RoutePipe, HideFormPipe, PokemonImagePipe],
  imports: [CommonModule],
  exports: [RoutePipe, HideFormPipe, PokemonImagePipe]
})
export class PipesModule {}
