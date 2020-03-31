import { MatDialogRef } from '@angular/material/dialog';
import { RoutesComponent } from '../routes.component';
import { SelectRouteDialogComponent } from '../select-route-dialog/select-route-dialog.component';

export interface SelectRouteDialogResult {
  pokemon: string;
  nickname: string;
  caught: boolean;
}

export type SelectRouteDialog = MatDialogRef<
  SelectRouteDialogComponent,
  SelectRouteDialogResult | undefined
>;

export type SelectRouteDialogRef = MatDialogRef<
  RoutesComponent,
  SelectRouteDialogResult | undefined
>;
