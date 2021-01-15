import { EncounterType, Route } from '@nuzlocke/models/route.model';
import { filterExclusives } from '../resources/game-locations/exclusives';
import { Game } from './pokemon/game';
import { GameGroup } from './pokemon/game-groups';

export interface Location {
  location: string;
  pokemon: string[];
  order: number;
}

export interface GameLocation {
  game: GameGroup;
  gifts: Location[];
  statics: Location[];
  encounters: Location[];
}

function getPokemon(
  gamesFromGroup: [Game, Game] | [Game],
  game: Game,
  pokemon: string[],
  exclusives: [string[], string[]]
) {
  return gamesFromGroup.length > 1
    ? filterExclusives(game === gamesFromGroup[0], pokemon, exclusives)
    : pokemon;
}

export function convertGameLocationToRoutes(
  gameLocation: GameLocation,
  gamesFromGroup: [Game, Game] | [Game],
  exclusives: [string[], string[]]
): Route[][] {
  return gamesFromGroup.map(game => {
    return [
      ...gameLocation.gifts.map(encounter => ({
        location: 'Gift - ' + encounter.location,
        pokemon: encounter.pokemon,
        order: encounter.order,
        game,
        type: EncounterType.Gift
      })),
      ...gameLocation.statics.map(encounter => ({
        location: 'Static - ' + encounter.location,
        pokemon: getPokemon(
          gamesFromGroup,
          game,
          encounter.pokemon,
          exclusives
        ),
        order: encounter.order,
        game,
        type: EncounterType.Static
      })),
      ...gameLocation.encounters.map(encounter => ({
        location: encounter.location,
        pokemon: getPokemon(
          gamesFromGroup,
          game,
          encounter.pokemon,
          exclusives
        ),
        order: encounter.order,
        game,
        type: EncounterType.Encounter
      }))
    ];
  });
}
