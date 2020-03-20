import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TeamBuilderRoutingModule } from './team-builder-routing.module';
import { TeamComponent } from './team/team.component';
import { TeamBuilderComponent } from './container/team-builder.component';
import { PickerComponent } from './picker/picker.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    TeamBuilderComponent,
    TeamComponent,
    PickerComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    TeamBuilderRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    VirtualScrollerModule
  ]
})
export class TeamBuilderModule {}
