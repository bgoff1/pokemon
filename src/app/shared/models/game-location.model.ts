import {
  Route,
  RouteEncounterType
} from '@features/nuzlocke/models/route.model';
import { GameGroup } from '@models/pokemon/game-groups';

export interface Location {
  location: string;
  pokemon: string[];
  order?: number;
}

export interface GameLocation {
  game: GameGroup;
  gifts: Location[];
  statics: Location[];
  encounters: Location[];
}

export function convertGameLocationToRoutes(
  gameLocation: GameLocation
): Route[] {
  return [
    ...gameLocation.gifts.map(encounter => ({
      location: 'Gift - ' + encounter.location,
      pokemon: encounter.pokemon,
      order: encounter.order,
      game: gameLocation.game,
      type: RouteEncounterType.Gift
    })),
    ...gameLocation.statics.map(encounter => ({
      location: 'Static - ' + encounter.location,
      pokemon: encounter.pokemon,
      order: encounter.order,
      game: gameLocation.game,
      type: RouteEncounterType.Static
    })),
    ...gameLocation.encounters.map(encounter => ({
      location: encounter.location,
      pokemon: encounter.pokemon,
      order: encounter.order,
      game: gameLocation.game,
      type: RouteEncounterType.Encounter
    }))
  ];
}
