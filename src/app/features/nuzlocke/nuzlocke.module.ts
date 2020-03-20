import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OverviewComponent } from './components/overview/overview.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SavesComponent } from './components/saves/saves.component';
import { CreateComponent } from './components/create/create.component';
import { CreateGuard } from './guards/create.guard';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [CreateGuard]
  },
  {
    path: 'encounters',
    component: EncountersComponent,
    canActivate: [CreateGuard]
  },
  { path: 'routes', component: RoutesComponent, canActivate: [CreateGuard] },
  { path: 'create', component: CreateComponent },
  { path: 'saves', component: SavesComponent, canActivate: [CreateGuard] }
];

@NgModule({
  declarations: [
    OverviewComponent,
    EncountersComponent,
    RoutesComponent,
    SavesComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  providers: [CreateGuard]
})
export class NuzlockeModule {}
