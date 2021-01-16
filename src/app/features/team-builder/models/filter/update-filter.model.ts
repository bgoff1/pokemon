import { FilterProperties } from './filter.model';

export interface UpdateFilter {
  id: number;
  filter: FilterProperties;
  value: string;
  enabled: number;
}
