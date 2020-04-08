import { MatDialogRef } from '@angular/material/dialog';
import { EvolveDialogComponent } from '../components/overview/drag-drop/evolve-dialog/evolve-dialog.component';
import { DragDropComponent } from '../components/overview/drag-drop/drag-drop.component';

// tslint:disable-next-line: no-empty-interface

export type EvolveDialog = MatDialogRef<
  EvolveDialogComponent,
  string | undefined
>;

export type EvolveDialogRef = MatDialogRef<
  DragDropComponent,
  string | undefined
>;
