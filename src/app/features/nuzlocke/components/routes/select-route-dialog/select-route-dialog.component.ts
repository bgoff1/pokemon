import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayRoute } from '@nuzlocke/models/route.model';
import { SelectRouteDialogRef } from '@nuzlocke/models/select-route-dialog.model';
import { PickerComponent } from '../../picker/picker.component';

@Component({
  selector: 'app-select-route-dialog',
  templateUrl: './select-route-dialog.component.html'
})
export class SelectRouteDialogComponent implements OnInit {
  routeFormControl: FormGroup;
  caught: boolean;
  allNames: string[] = [];
  random: boolean;
  encounter: string;
  previouslyFocusedElement: Element | null = null;
  @ViewChild(PickerComponent) pickerComponent!: PickerComponent;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: SelectRouteDialogRef,
    @Inject(MAT_DIALOG_DATA) private readonly data: DisplayRoute
  ) {
    this.routeFormControl = new FormGroup({
      page: new FormControl(data.visited ? 2 : 1)
    });
    this.caught = !!data.capturedPokemon;
    this.random = data.random;
    this.encounter = data.location;
  }

  ngOnInit(): void {
    if (this.encounter.includes('Gift')) {
      this.obtained('yes');
    }
  }

  onClose(button: 'cancel' | 'ok'): void {
    if (button === 'ok' && this.pickerComponent.formGroup.valid) {
      this.dialogRef.close({
        ...this.pickerComponent.formValue,
        caught: this.caught
      });
    } else {
      this.dialogRef.close();
    }
  }

  goBack(): void {
    this.routeFormControl.patchValue({ page: 1 });
    this.routeFormControl.markAsPristine();
  }

  obtained(result: 'yes' | 'no'): void {
    this.routeFormControl.patchValue({ page: 2 });
    this.caught = result === 'yes';
  }

  get pokemonOptions(): string[] {
    return this.data.pokemon;
  }

  get page(): number {
    return this.routeFormControl.controls.page.value;
  }
}
