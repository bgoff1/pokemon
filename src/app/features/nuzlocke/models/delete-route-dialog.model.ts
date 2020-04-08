import { MatDialogRef } from '@angular/material/dialog';
import { DeleteRouteDialogComponent } from '../components/routes/delete-route-dialog/delete-route-dialog.component';
import { RoutesComponent } from '../components/routes/routes.component';

export interface DeleteRouteResult {
  onlyFromCurrent: boolean;
}

export type DeleteRouteDialog = MatDialogRef<
  DeleteRouteDialogComponent,
  DeleteRouteResult | undefined
>;

export type DeleteRouteDialogRef = MatDialogRef<
  RoutesComponent,
  DeleteRouteResult | undefined
>;
