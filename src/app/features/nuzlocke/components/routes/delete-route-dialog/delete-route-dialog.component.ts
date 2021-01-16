import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteRouteDialogRef } from '@features/nuzlocke/models/delete-route-dialog.model';

@Component({
  selector: 'app-delete-route-dialog',
  templateUrl: './delete-route-dialog.component.html'
})
export class DeleteRouteDialogComponent {
  routeFormControl: FormGroup;
  routeName: string;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: DeleteRouteDialogRef,
    @Inject(MAT_DIALOG_DATA) data: { name: string }
  ) {
    this.routeName = data.name;
    this.routeFormControl = new FormGroup({
      current: new FormControl(true)
    });
  }

  onClose(button: 'cancel' | 'ok'): void {
    if (button === 'ok') {
      this.dialogRef.close({
        onlyFromCurrent: this.routeFormControl.controls.current.value
      });
    } else {
      this.dialogRef.close();
    }
  }
}
