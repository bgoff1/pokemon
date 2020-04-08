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
    path: 'nuzlocke',
    loadChildren: () =>
      import('../nuzlocke/nuzlocke.module').then(m => m.NuzlockeModule)
  },
  {
    path: '',
    redirectTo: 'team-builder',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'team-builder'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
