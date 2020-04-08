import { MatDialogRef } from '@angular/material/dialog';
import { SaveDialogComponent } from '../components/saves/save-dialog/save-dialog.component';
import { SavesComponent } from '../components/saves/saves.component';

// tslint:disable-next-line: no-empty-interface
export interface SaveRouteDialogResult {
  delete: boolean;
  name: string;
  random: boolean;
}

export type SaveRouteDialog = MatDialogRef<
  SaveDialogComponent,
  SaveRouteDialogResult | undefined
>;

export type SaveRouteDialogRef = MatDialogRef<
  SavesComponent,
  SaveRouteDialogResult | undefined
>;
