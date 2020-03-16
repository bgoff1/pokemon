import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuzlockeComponent } from './container/nuzlocke.component';

const routes: Routes = [
  { path: '', component: NuzlockeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuzlockeRoutingModule {}
