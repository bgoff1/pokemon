import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';
import { RouterService } from '@services/router/router.service';
import { Game } from '@features/nuzlocke/models/game.model';
import { GameGroup } from '@models/pokemon/game-groups';

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

  submit() {
    if (!this.formGroup.invalid) {
      this.nuzlockeService
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
