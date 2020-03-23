import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke.service';
import { RouteService } from '@services/routes/route.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formGroup: FormGroup;
  games: string[] = [];

  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routeService: RouteService
  ) {
    this.games = nuzlockeService.gameNames;
    this.formGroup = new FormGroup({
      runName: new FormControl('', Validators.required),
      game: new FormControl(this.games[0], Validators.required),
      random: new FormControl(false, Validators.required)
    });
  }

  submit() {
    if (!this.formGroup.invalid) {
      this.nuzlockeService.createNuzlocke(this.formGroup.value).then(run => {
        this.routeService.changeTab('overview', run);
      });
    }
  }
}
