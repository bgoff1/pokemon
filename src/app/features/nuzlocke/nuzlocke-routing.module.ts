import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './container/overview.component';
import { EncountersComponent } from './encounters/encounters.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'encounters', component: EncountersComponent },
  { path: 'routes', component: RoutesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuzlockeRoutingModule {}
