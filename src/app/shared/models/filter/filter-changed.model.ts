import { Filter, FilterProperties } from './filter.model';

export interface FilterChanged {
  filters: Filter[];
  filterName: FilterProperties;
}
