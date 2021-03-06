import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateRouteDialogRef } from '@nuzlocke/models/create-route-dialog.model';

@Component({
  selector: 'app-create-route-dialog',
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

  onClose(button: 'cancel' | 'ok'): void {
    if (button === 'ok') {
      if (this.routeFormControl.valid) {
        this.dialogRef.close(this.routeFormControl.value);
      }
    } else {
      this.dialogRef.close();
    }
  }
}
