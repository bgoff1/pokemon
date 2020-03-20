import { FilterProperties } from '@features/team-builder/models/filter';
import { romanize } from '@models/util/roman/roman';
import { typeNames } from '@models/pokemon/type';
import { Region } from '@models/pokemon/region';
import { enumValues } from '@models/util/enum';

import extras from './extras';
const regions = enumValues(Region);

let id = 0;

export default [
  {
    filter: FilterProperties.Coverage,
    value: '',
    enabled: false,
    _id: (id++).toString()
  },
  {
    filter: FilterProperties.Search,
    value: '',
    enabled: false,
    _id: (id++).toString()
  },
  ...extras.map(value => ({
    filter: FilterProperties.Extras,
    value,
    enabled: true,
    _id: (id++).toString(),
    expanded: false
  })),
  ...regions.map(value => ({
    filter: FilterProperties.Regions,
    value,
    enabled: false,
    _id: (id++).toString(),
    expanded: false
  })),
  ...Array.from(Array(8).keys()).map(value => ({
    filter: FilterProperties.Generations,
    value: `Generation ${romanize(value + 1)}`,
    enabled: false,
    _id: (id++).toString(),
    expanded: false
  })),
  ...typeNames.map(value => ({
    filter: FilterProperties.Types,
    value,
    enabled: false,
    _id: (id++).toString(),
    expanded: false
  }))
];
