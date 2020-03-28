import { Component } from '@angular/core';
import { RoutesComponent } from '../routes.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'route-dialog',
  templateUrl: './route-dialog.component.html',
  styleUrls: ['./route-dialog.component.scss']
})
export class RouteDialogComponent {
  routeFormControl: FormGroup;
  constructor(
    private readonly dialogRef: MatDialogRef<RoutesComponent, string | null>
  ) {
    this.routeFormControl = new FormGroup({
      route: new FormControl('', Validators.required),
      current: new FormControl()
    });
  }

  onClose(button: 'cancel' | 'ok') {
    if (button === 'ok') {
      if (this.routeFormControl.valid) {
        this.dialogRef.close(this.routeFormControl.controls.route.value);
      }
    } else {
      this.dialogRef.close();
    }
  }
}
