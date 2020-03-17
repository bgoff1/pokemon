import { FilterProperties } from '@models/filter';
import { romanize } from '@models/util/roman/roman';
import { typeNames } from '@models/pokemon/type';

import extras from './extras';
import regions from './regions';
let id = 1;

export default [
  ...extras.map(value => ({
    filter: FilterProperties.Extras,
    value,
    enabled: true,
    _id: (id++).toString()
  })),
  ...regions.map(value => ({
    filter: FilterProperties.Regions,
    value,
    enabled: false,
    _id: (id++).toString()
  })),
  ...Array.from(Array(8).keys()).map(value => ({
    filter: FilterProperties.Generations,
    value: `Generation ${romanize(value + 1)}`,
    enabled: false,
    _id: (id++).toString()
  })),
  ...typeNames.map(value => ({
    filter: FilterProperties.Types,
    value,
    enabled: false,
    _id: (id++).toString()
  })),
  {
    filter: FilterProperties.Coverage,
    value: '',
    enabled: false,
    _id: '0'
  }
];
