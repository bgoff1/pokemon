import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterService } from '@services/router/router.service';
import { GameGroup } from '@models/pokemon/game-groups';
import { Game } from '@nuzlocke/models/game.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formGroup: FormGroup;
  games: Game[] = [];

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

  get runName(): string {
    return this.formGroup.controls.runName.value;
  }

  get game(): GameGroup {
    return this.formGroup.controls.game.value;
  }

  get random(): boolean {
    return this.formGroup.controls.random.value;
  }
}
