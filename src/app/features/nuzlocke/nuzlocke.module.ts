import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './container/overview.component';
import { NuzlockeRoutingModule } from './nuzlocke-routing.module';
import { EncountersComponent } from './encounters/encounters.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  declarations: [OverviewComponent, EncountersComponent, RoutesComponent],
  imports: [CommonModule, NuzlockeRoutingModule]
})
export class NuzlockeModule {}
