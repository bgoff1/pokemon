import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EvolveDialogRef } from '@features/nuzlocke/models/evolve-dialog.model';
import { PickerComponent } from '@nuzlocke/components/picker/picker.component';
import { Pokemon } from '@nuzlocke/models/pokemon.model';
import { TitleCaseService } from '@services/titlecase/titlecase.service';

@Component({
  selector: 'app-evolve-dialog',
  templateUrl: './evolve-dialog.component.html'
})
export class EvolveDialogComponent {
  pokemon: Pokemon;
  @ViewChild(PickerComponent) pickerComponent!: PickerComponent;

  constructor(
    @Inject(MatDialogRef)
    private readonly dialogRef: EvolveDialogRef,
    @Inject(MAT_DIALOG_DATA) data: { pokemon: Pokemon },
    private readonly titleCaseService: TitleCaseService
  ) {
    this.pokemon = data.pokemon;
  }

  onClose(button: 'cancel' | 'ok'): void {
    if (button === 'ok') {
      this.dialogRef.close(this.pickerComponent.formValue);
    } else {
      this.dialogRef.close();
    }
  }

  get nickname(): string {
    return this.pokemon.nickname?.trim() ?? '';
  }

  get evolutionName(): string {
    return (
      this.pokemon.nickname?.trim() ||
      this.titleCaseService.titlecase(this.pokemon.name)
    );
  }
}
