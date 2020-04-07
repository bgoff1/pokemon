import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.BlackWhite,
  gifts: [
    {
      location: 'Gift - Starter',
      pokemon: ['snivy', 'oshawott', 'tepig'],
      order: 1
    },
    {
      location: 'Gift - Dreamyard',
      pokemon: ['pansage', 'panpour', 'pansear'],
      order: 1
    },
    {
      location: 'Gift - Fossil',
      pokemon: ['tirtuoga', 'archen'],
      order: 1
    },
    {
      location: 'Gift - Route 18 Egg',
      pokemon: ['larvesta'],
      order: 1
    },
    {
      location: 'Gift - Twist Mountain Daily Fossil',
      pokemon: [
        'omanyte',
        'kabuto',
        'aerodactyl',
        'lileep',
        'anorith',
        'cranidos',
        'shieldon'
      ],
      order: 1
    }
  ],
  statics: [
    {
      location: 'Static - Relic Castle',
      pokemon: ['darmanitan'],
      order: 1
    },
    {
      location: "Static - N's Castle",
      pokemon: ['reshiram', 'zekrom'],
      order: 1
    },
    {
      location: 'Static - Mistralton Cave',
      pokemon: ['cobalion'],
      order: 1
    },
    {
      location: 'Static - Trial Chamber',
      pokemon: ['terrakion'],
      order: 1
    },
    {
      location: 'Static - Rumination Field',
      pokemon: ['virizion'],
      order: 1
    },
    {
      location: 'Roaming Storm',
      pokemon: ['tornadus', 'thundurus'],
      order: 1
    }
  ],
  encounters: []
};

export default convertGameLocationToRoutes(gameLocation);
