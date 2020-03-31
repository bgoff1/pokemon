import { FilterProperties } from './index';

export interface UpdateFilter {
  id: number;
  filter: FilterProperties;
  value: string;
  enabled: number;
}
