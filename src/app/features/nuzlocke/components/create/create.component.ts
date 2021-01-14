import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterService } from '@services/router/router.service';
import { DisplayGame } from '@features/nuzlocke/models/display-game';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { Game } from '@models/pokemon/game';
import { environment } from '@environment';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formGroup: FormGroup;
  games: DisplayGame[] = [];

  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routerService: RouterService
  ) {
    this.games = nuzlockeService.gameNames;
    this.formGroup = new FormGroup({
      runName: new FormControl('', Validators.required),
      game: new FormControl(this.games[0].game, Validators.required),
      random: new FormControl(false, Validators.required)
    });
  }

  async submit() {
    if (!this.formGroup.invalid) {
      await this.nuzlockeService
        .createNuzlocke({
          runName: this.runName,
          game: this.game,
          random: this.random
        })
        .then(run => {
          this.routerService.changeTab(`overview`, run.id);
        });
    }
  }

  async generateTestRoutes() {
    if (this.development) {
      await this.nuzlockeService.generateTestSaves();
      this.routerService.redirect('/nuzlocke');
    }
  }

  get runName(): string {
    return this.formGroup.controls.runName.value;
  }

  get game(): Game {
    return this.formGroup.controls.game.value;
  }

  get random(): boolean {
    return this.formGroup.controls.random.value;
  }

  get development(): boolean {
    return !environment.production;
  }
}
