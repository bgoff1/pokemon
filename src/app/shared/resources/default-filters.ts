import { FilterProperties } from '@features/team-builder/models/filter';
import { romanize } from '@util/roman';
import { typeNames } from '@models/pokemon/type';
import { Region } from '@models/pokemon/region';
import { enumValues } from '@util/enum';

import extras from './extras';
const regions = enumValues(Region);

let id = 0;

export default [
  {
    filter: FilterProperties.Coverage,
    value: '',
    enabled: 0,
    id: id++
  },
  {
    filter: FilterProperties.Search,
    value: '',
    enabled: 0,
    id: id++
  },
  ...extras.map(value => ({
    filter: FilterProperties.Extras,
    value,
    enabled: 1,
    id: id++
  })),
  ...regions.map(value => ({
    filter: FilterProperties.Regions,
    value,
    enabled: 0,
    id: id++
  })),
  ...Array.from(Array(8).keys()).map(value => ({
    filter: FilterProperties.Generations,
    value: `Generation ${romanize(value + 1)}`,
    enabled: 0,
    id: id++
  })),
  ...typeNames.map(value => ({
    filter: FilterProperties.Types,
    value,
    enabled: 0,
    id: id++
  }))
];
