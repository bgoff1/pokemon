import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '@pipes';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TeamBuilderComponent } from './components/main/container/container.component';
import { FilterOptionsComponent } from './components/filter/filter.component';
import { PickerComponent } from './components/main/picker/picker.component';
import { PokemonComponent } from './components/main/picker/pokemon/pokemon.component';
import { SearchComponent } from './components/filter/search/search.component';
import { TeamComponent } from './components/main/team/team.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: TeamBuilderComponent },
  { path: 'options', component: FilterOptionsComponent }
];

const materialModules = [
  MatTreeModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  VirtualScrollerModule
];

@NgModule({
  declarations: [
    TeamBuilderComponent,
    FilterOptionsComponent,
    PickerComponent,
    PokemonComponent,
    SearchComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ]
})
export class TeamBuilderModule {}
