import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SelectRouteDialogRef } from '../models/select-route-dialog.model';
import { Route } from '@features/nuzlocke/models/route.model';
import { NameUtility } from '@util/name';

@Component({
  selector: 'select-route-dialog',
  templateUrl: './select-route-dialog.component.html',
  styleUrls: ['./select-route-dialog.component.scss']
})
export class SelectRouteDialogComponent implements OnInit {
  routeFormControl: FormGroup;
  page = 1;
  caught: boolean;
  autocompleteOptions: string[];
  filteredOptions: Observable<string[]>;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: SelectRouteDialogRef,
    @Inject(MAT_DIALOG_DATA) data: Route
  ) {
    this.autocompleteOptions = data.pokemon;
    this.routeFormControl = new FormGroup({
      pokemon: new FormControl('', Validators.required),
      nickname: new FormControl()
    });
  }

  ngOnInit() {
    this.filteredOptions = this.pokemonControl.valueChanges.pipe(
      startWith(''),
      map((value: string) =>
        this.autocompleteOptions.filter(option =>
          option.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
    this.pokemonControl.setValue('');
  }

  onClose(button: 'cancel' | 'ok') {
    if (button === 'ok') {
      if (this.routeFormControl.valid) {
        this.dialogRef.close({
          ...this.routeFormControl.value,
          caught: this.caught
        });
      }
    } else {
      this.dialogRef.close();
    }
  }

  getPokemonImage(pokemonName: string): string {
    const imageName = NameUtility.replaceImageCharacters(pokemonName);
    return `assets/pokemon/${imageName}.png`;
  }

  obtained(result: 'yes' | 'no') {
    this.page++;
    this.caught = result === 'yes';
  }

  get pokemonControl() {
    return this.routeFormControl?.controls.pokemon;
  }
}
