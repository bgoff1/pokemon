import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { EncountersComponent } from './encounters/encounters.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'encounters', component: EncountersComponent },
  { path: 'routes', component: RoutesComponent }
];

@NgModule({
  declarations: [OverviewComponent, EncountersComponent, RoutesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class NuzlockeModule {}
