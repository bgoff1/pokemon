import { Type, types } from '@models/pokemon/type';

export class Coverage {
  // Map is stored as Attacker to Map of defenders and effectiveness of each
  private typeEffectivenessMap: Map<Type, Map<Type, number>> = this.addAll();

  private addNormal(map: Map<Type, Map<Type, number>>) {
    const normal: Map<Type, number> = new Map();
    this.addHalf(normal, [Type.Rock, Type.Steel]);
    this.addNot(Type.Ghost, normal);
    this.addRest(normal);
    map.set(Type.Normal, normal);
  }
  private addFire(map: Map<Type, Map<Type, number>>) {
    const fire: Map<Type, number> = new Map();
    this.addHalf(fire, [Type.Fire, Type.Water, Type.Rock, Type.Dragon]);
    this.addDouble(fire, [Type.Grass, Type.Ice, Type.Bug, Type.Steel]);
    this.addRest(fire);
    map.set(Type.Fire, fire);
  }
  private addWater(map: Map<Type, Map<Type, number>>) {
    const water: Map<Type, number> = new Map();
    this.addDouble(water, [Type.Fire, Type.Ground, Type.Rock]);
    this.addHalf(water, [Type.Water, Type.Grass, Type.Dragon]);
    this.addRest(water);
    map.set(Type.Water, water);
  }
  private addElectric(map: Map<Type, Map<Type, number>>) {
    const electric: Map<Type, number> = new Map();
    this.addDouble(electric, [Type.Water, Type.Flying]);
    this.addHalf(electric, [Type.Electric, Type.Grass, Type.Dragon]);
    this.addNot(Type.Ground, electric);
    this.addRest(electric);
    map.set(Type.Electric, electric);
  }
  private addGrass(map: Map<Type, Map<Type, number>>) {
    const grass: Map<Type, number> = new Map();
    this.addHalf(grass, [
      Type.Fire,
      Type.Grass,
      Type.Poison,
      Type.Flying,
      Type.Bug,
      Type.Dragon,
      Type.Steel
    ]);
    this.addDouble(grass, [Type.Water, Type.Ground, Type.Rock]);
    this.addRest(grass);
    map.set(Type.Grass, grass);
  }
  private addIce(map: Map<Type, Map<Type, number>>) {
    const ice: Map<Type, number> = new Map();
    this.addHalf(ice, [Type.Fire, Type.Water, Type.Ice, Type.Steel]);
    this.addDouble(ice, [Type.Grass, Type.Ground, Type.Flying, Type.Dragon]);
    this.addRest(ice);
    map.set(Type.Ice, ice);
  }
  private addFighting(map: Map<Type, Map<Type, number>>) {
    const fighting: Map<Type, number> = new Map();
    this.addDouble(fighting, [
      Type.Normal,
      Type.Ice,
      Type.Rock,
      Type.Dark,
      Type.Steel
    ]);
    this.addHalf(fighting, [
      Type.Poison,
      Type.Flying,
      Type.Psychic,
      Type.Bug,
      Type.Fairy
    ]);
    this.addNot(Type.Ghost, fighting);
    this.addRest(fighting);
    map.set(Type.Fighting, fighting);
  }
  private addPoison(map: Map<Type, Map<Type, number>>) {
    const poison: Map<Type, number> = new Map();
    this.addHalf(poison, [Type.Poison, Type.Ground, Type.Rock, Type.Ghost]);
    this.addDouble(poison, [Type.Grass, Type.Fairy]);
    this.addNot(Type.Steel, poison);
    this.addRest(poison);
    map.set(Type.Poison, poison);
  }
  private addGround(map: Map<Type, Map<Type, number>>) {
    const ground: Map<Type, number> = new Map();
    this.addHalf(ground, [Type.Grass, Type.Bug]);
    this.addDouble(ground, [
      Type.Fire,
      Type.Electric,
      Type.Poison,
      Type.Rock,
      Type.Steel
    ]);
    this.addNot(Type.Flying, ground);
    this.addRest(ground);
    map.set(Type.Ground, ground);
  }
  private addFlying(map: Map<Type, Map<Type, number>>) {
    const flying: Map<Type, number> = new Map();
    this.addHalf(flying, [Type.Electric, Type.Rock, Type.Steel]);
    this.addDouble(flying, [Type.Grass, Type.Fighting, Type.Bug]);
    this.addRest(flying);
    map.set(Type.Flying, flying);
  }
  private addPsychic(map: Map<Type, Map<Type, number>>) {
    const psychic: Map<Type, number> = new Map();
    this.addHalf(psychic, [Type.Psychic, Type.Steel]);
    this.addDouble(psychic, [Type.Fighting, Type.Poison]);
    this.addNot(Type.Dark, psychic);
    this.addRest(psychic);
    map.set(Type.Psychic, psychic);
  }
  private addBug(map: Map<Type, Map<Type, number>>) {
    const bug: Map<Type, number> = new Map();
    this.addHalf(bug, [
      Type.Fire,
      Type.Fighting,
      Type.Poison,
      Type.Flying,
      Type.Ghost,
      Type.Steel,
      Type.Fairy
    ]);
    this.addDouble(bug, [Type.Grass, Type.Psychic, Type.Dark]);
    this.addRest(bug);
    map.set(Type.Bug, bug);
  }
  private addRock(map: Map<Type, Map<Type, number>>) {
    const rock: Map<Type, number> = new Map();
    this.addDouble(rock, [Type.Fire, Type.Ice, Type.Flying, Type.Bug]);
    this.addHalf(rock, [Type.Fighting, Type.Ground, Type.Steel]);
    this.addRest(rock);
    map.set(Type.Rock, rock);
  }
  private addGhost(map: Map<Type, Map<Type, number>>) {
    const ghost: Map<Type, number> = new Map();
    this.addNot(Type.Normal, ghost);
    this.addHalf(ghost, [Type.Dark]);
    this.addDouble(ghost, [Type.Ghost, Type.Psychic]);
    this.addRest(ghost);
    map.set(Type.Ghost, ghost);
  }
  private addDragon(map: Map<Type, Map<Type, number>>) {
    const dragon: Map<Type, number> = new Map();
    this.addDouble(dragon, [Type.Dragon]);
    this.addHalf(dragon, [Type.Steel]);
    this.addNot(Type.Fairy, dragon);
    this.addRest(dragon);
    map.set(Type.Dragon, dragon);
  }
  private addDark(map: Map<Type, Map<Type, number>>) {
    const dark: Map<Type, number> = new Map();
    this.addHalf(dark, [Type.Fighting, Type.Dragon, Type.Fairy]);
    this.addDouble(dark, [Type.Psychic, Type.Ghost]);
    this.addRest(dark);
    map.set(Type.Dark, dark);
  }
  private addSteel(map: Map<Type, Map<Type, number>>) {
    const steel: Map<Type, number> = new Map();
    this.addHalf(steel, [Type.Fire, Type.Water, Type.Electric, Type.Steel]);
    this.addDouble(steel, [Type.Ice, Type.Fairy]);
    this.addRest(steel);
    map.set(Type.Steel, steel);
  }
  private addFairy(map: Map<Type, Map<Type, number>>) {
    const fairy: Map<Type, number> = new Map();
    this.addDouble(fairy, [Type.Fighting, Type.Dragon, Type.Dark]);
    this.addHalf(fairy, [Type.Fire, Type.Poison, Type.Steel]);
    this.addRest(fairy);
    map.set(Type.Fairy, fairy);
  }
  private addAll() {
    const map: Map<Type, Map<Type, number>> = new Map();
    this.addNormal(map);
    this.addFire(map);
    this.addWater(map);
    this.addElectric(map);
    this.addGrass(map);
    this.addIce(map);
    this.addFighting(map);
    this.addPoison(map);
    this.addGround(map);
    this.addFlying(map);
    this.addPsychic(map);
    this.addBug(map);
    this.addRock(map);
    this.addGhost(map);
    this.addDragon(map);
    this.addDark(map);
    this.addSteel(map);
    this.addFairy(map);
    return map;
  }
  private addHalf(map: Map<Type, number>, halfEffective: Type[]) {
    for (const item of halfEffective) {
      map.set(item, 0.5);
    }
  }
  private addDouble(map: Map<Type, number>, superEffective: Type[]) {
    for (const item of superEffective) {
      map.set(item, 2);
    }
  }
  private addNot(type: Type, map: Map<Type, number>) {
    map.set(type, 0);
  }
  private addRest(map: Map<Type, number>) {
    const usedTypes: Type[] = Array.from(map.keys());

    const unusedTypes = types.filter(type => !usedTypes.includes(type));
    for (const type of unusedTypes) {
      map.set(type, 1);
    }
  }

  isCovered(teamTypes: Type[], defenderTypes: Type[]) {
    if (defenderTypes.length === 1) {
      for (const type of teamTypes) {
        const effectiveness = this.typeEffectivenessMap
          .get(type)
          .get(defenderTypes[0]);
        if (effectiveness === 2) {
          return true;
        }
      }
      return false;
    }
    for (const type of teamTypes) {
      const typeMap = this.typeEffectivenessMap.get(type);
      const effectiveness =
        typeMap.get(defenderTypes[0]) * typeMap.get(defenderTypes[1]);
      if (effectiveness > 1) {
        return true;
      }
    }
    return false;
  }
}
