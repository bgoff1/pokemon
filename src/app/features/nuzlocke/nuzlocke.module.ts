import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuzlockeComponent } from './container/nuzlocke.component';
import { NuzlockeRoutingModule } from './nuzlocke-routing.module';

@NgModule({
  declarations: [NuzlockeComponent],
  imports: [CommonModule, NuzlockeRoutingModule]
})
export class NuzlockeModule {}
