import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.Black2White2,
  gifts: [],
  statics: [],
  encounters: []
};

export default convertGameLocationToRoutes(gameLocation);
