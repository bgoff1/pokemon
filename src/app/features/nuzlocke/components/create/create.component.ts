import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { games } from '@models/pokemon/game-groups';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formGroup: FormGroup;
  games = games;

  constructor() {
    this.formGroup = new FormGroup({
      runName: new FormControl('', Validators.required),
      game: new FormControl(this.games[0], Validators.required),
      random: new FormControl(false, Validators.required)
    });
  }

  submit() {
    console.log(this.formGroup);
  }
}
