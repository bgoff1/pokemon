import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'team-builder',
    loadChildren: () =>
      import('../team-builder/team-builder.module').then(
        m => m.TeamBuilderModule
      )
  },
  {
    path: 'options',
    loadChildren: () =>
      import('../filter-options/filter-options.module').then(
        m => m.FilterOptionsModule
      )
  },
  {
    path: 'nuzlocke',
    loadChildren: () =>
      import('../nuzlocke/nuzlocke.module').then(m => m.NuzlockeModule)
  },
  {
    path: '',
    redirectTo: 'team-builder',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
