import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { OverviewComponent } from './components/overview/overview.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SavesComponent } from './components/saves/saves.component';
import { CreateComponent } from './components/create/create.component';
import { CreateGuard } from './guards/create.guard';
import { NuzlockeResolverService } from './resolvers/nuzlocke-resolver.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '', redirectTo: 'saves', pathMatch: 'full' },
  {
    path: 'overview/:id',
    component: OverviewComponent,
    canActivate: [CreateGuard],
    resolve: {
      nuzlocke: NuzlockeResolverService
    }
  },
  {
    path: 'encounters/:id',
    component: EncountersComponent,
    canActivate: [CreateGuard],
    resolve: {
      nuzlocke: NuzlockeResolverService
    }
  },
  {
    path: 'routes/:id',
    component: RoutesComponent,
    canActivate: [CreateGuard],
    resolve: {
      nuzlocke: NuzlockeResolverService
    }
  },
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
    MatListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  providers: [CreateGuard]
})
export class NuzlockeModule {}
