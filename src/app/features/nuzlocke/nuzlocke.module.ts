import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
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
import { RouteDialogComponent } from './components/routes/route-dialog/route-dialog.component';

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

const materialModules = [
  MatSlideToggleModule,
  MatListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    OverviewComponent,
    EncountersComponent,
    RoutesComponent,
    SavesComponent,
    CreateComponent,
    RouteDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  entryComponents: [RouteDialogComponent],
  providers: [CreateGuard]
})
export class NuzlockeModule {}
