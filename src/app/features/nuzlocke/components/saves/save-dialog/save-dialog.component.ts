import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaveRouteDialogRef } from '@features/nuzlocke/models/save-dialog.model';

@Component({
  selector: 'save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent {
  saveFormControl: FormGroup;
  confirmDelete = false;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: SaveRouteDialogRef,
    @Inject(MAT_DIALOG_DATA) data: { name: string; random: boolean }
  ) {
    this.saveFormControl = new FormGroup({
      runName: new FormControl(data.name, Validators.required),
      random: new FormControl(data.random)
    });
  }

  delete() {
    if (!this.confirmDelete) {
      this.confirmDelete = true;
    } else {
      this.dialogRef.close({ delete: true, name: '', random: null });
    }
  }

  onClose(button: 'cancel' | 'ok') {
    if (button === 'ok') {
      if (this.saveFormControl.valid) {
        this.dialogRef.close({
          delete: false,
          name: this.saveFormControl.controls.runName.value,
          random: this.saveFormControl.controls.random.value
        });
      }
    } else {
      this.dialogRef.close();
    }
  }
}
