import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePipe } from './route.pipe';

@NgModule({
  declarations: [RoutePipe],
  imports: [CommonModule],
  exports: [RoutePipe]
})
export class PipesModule {}
