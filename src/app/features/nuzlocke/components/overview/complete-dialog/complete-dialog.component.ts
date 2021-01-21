import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-complete-dialog',
  templateUrl: './complete-dialog.component.html',
  styleUrls: ['./complete-dialog.component.scss']
})
export class CompleteDialogComponent {
  finished: boolean;
  name: string;
  finishedBefore: boolean;
  constructor(
    @Inject(MatDialogRef)
    private readonly dialogRef: MatDialogRef<CompleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: { finished: boolean; name: string; alreadyFinished: boolean }
  ) {
    console.log(data);
    this.finished = data.finished;
    this.name = data.name;
    this.finishedBefore = data.alreadyFinished;
  }

  onClose(value: 'cancel' | 'ok'): void {
    if (value === 'ok') {
      return this.dialogRef.close(value);
    }
    this.dialogRef.close();
  }

  onlyFinish(): void {
    this.dialogRef.close('finish-only');
  }
}
