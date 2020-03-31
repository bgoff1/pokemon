import { MatDialogRef } from '@angular/material/dialog';
import { CreateRouteDialogComponent } from '../create-route-dialog/create-route-dialog.component';
import { RoutesComponent } from '../routes.component';

export interface CreateRouteDialogResult {
  route: string;
  current: boolean;
}

export type CreateRouteDialog = MatDialogRef<
  CreateRouteDialogComponent,
  CreateRouteDialogResult | undefined
>;

export type CreateRouteDialogRef = MatDialogRef<
  RoutesComponent,
  CreateRouteDialogResult | undefined
>;
