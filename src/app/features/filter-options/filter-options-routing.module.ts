import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterOptionsComponent } from './container/filter-options.component';

const routes: Routes = [{ path: '', component: FilterOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterOptionsRoutingModule {}
