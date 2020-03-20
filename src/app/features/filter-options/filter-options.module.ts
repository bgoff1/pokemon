import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterOptionsComponent } from './container/filter-options.component';
import { SearchComponent } from './search/search.component';
import { FilterOptionsRoutingModule } from './filter-options-routing.module';

@NgModule({
  declarations: [FilterOptionsComponent, SearchComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    FilterOptionsRoutingModule,
    MatButtonModule
  ]
})
export class FilterOptionsModule {}
