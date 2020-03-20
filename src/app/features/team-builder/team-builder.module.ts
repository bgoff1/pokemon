import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TeamComponent } from './team/team.component';
import { TeamBuilderComponent } from './container/team-builder.component';
import { PickerComponent } from './picker/picker.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FilterOptionsComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: TeamBuilderComponent },
  { path: 'options', component: FilterOptionsComponent }
];

@NgModule({
  declarations: [
    TeamBuilderComponent,
    TeamComponent,
    PickerComponent,
    PokemonComponent,
    FilterOptionsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    VirtualScrollerModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamBuilderModule {}
