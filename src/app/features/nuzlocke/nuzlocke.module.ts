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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverviewComponent } from './components/overview/overview.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SavesComponent } from './components/saves/saves.component';
import { CreateComponent } from './components/create/create.component';
import { CreateGuard } from './guards/create.guard';
import { NuzlockeResolverService } from './resolvers/nuzlocke-resolver.service';
import { CreateRouteDialogComponent } from './components/routes/create-route-dialog/create-route-dialog.component';
import { SelectRouteDialogComponent } from './components/routes/select-route-dialog/select-route-dialog.component';
import { DragDropComponent } from './components/overview/drag-drop/drag-drop.component';
import { PipesModule } from '@pipes';
import { DirectivesModule } from '@shared/directives/directives.module';
import { SaveDialogComponent } from './components/saves/save-dialog/save-dialog.component';
import { DeleteRouteDialogComponent } from './components/routes/delete-route-dialog/delete-route-dialog.component';
import { EvolveDialogComponent } from './components/overview/drag-drop/evolve-dialog/evolve-dialog.component';

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
  MatAutocompleteModule,
  MatSelectModule,
  DragDropModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    OverviewComponent,
    RoutesComponent,
    SavesComponent,
    CreateComponent,
    CreateRouteDialogComponent,
    SelectRouteDialogComponent,
    DragDropComponent,
    SaveDialogComponent,
    DeleteRouteDialogComponent,
    EvolveDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  entryComponents: [CreateRouteDialogComponent, SelectRouteDialogComponent],
  providers: [CreateGuard]
})
export class NuzlockeModule {}
