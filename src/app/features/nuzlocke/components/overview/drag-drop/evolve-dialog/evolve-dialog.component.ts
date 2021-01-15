import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EvolveDialogRef } from '@features/nuzlocke/models/evolve-dialog.model';
import { PickerComponent } from '@nuzlocke/components/picker/picker.component';
import { Pokemon } from '@nuzlocke/models/pokemon.model';
import { titlecase } from '@util/name';

@Component({
  selector: 'evolve-dialog',
  templateUrl: './evolve-dialog.component.html',
  styleUrls: ['./evolve-dialog.component.scss']
})
export class EvolveDialogComponent {
  pokemon: Pokemon;
  @ViewChild(PickerComponent) pickerComponent: PickerComponent;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: EvolveDialogRef,
    @Inject(MAT_DIALOG_DATA) data: { pokemon: Pokemon }
  ) {
    this.pokemon = data.pokemon;
  }

  onClose(button: 'cancel' | 'ok') {
    if (button === 'ok') {
      this.dialogRef.close(this.pickerComponent.formValue);
    } else {
      this.dialogRef.close();
    }
  }

  get evolutionName() {
    return this.pokemon.nickname || titlecase(this.pokemon.name);
  }
}
