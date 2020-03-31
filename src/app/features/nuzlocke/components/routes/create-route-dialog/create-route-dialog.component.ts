import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateRouteDialogRef } from '../models/create-route-dialog.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'create-route-dialog',
  templateUrl: './create-route-dialog.component.html',
  styleUrls: ['./create-route-dialog.component.scss']
})
export class CreateRouteDialogComponent {
  routeFormControl: FormGroup;
  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: CreateRouteDialogRef
  ) {
    this.routeFormControl = new FormGroup({
      route: new FormControl('', Validators.required),
      current: new FormControl(false)
    });
  }

  onClose(button: 'cancel' | 'ok') {
    if (button === 'ok') {
      if (this.routeFormControl.valid) {
        this.dialogRef.close(this.routeFormControl.value);
      }
    } else {
      this.dialogRef.close();
    }
  }
}
