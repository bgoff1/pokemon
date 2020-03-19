import { FilterProperties } from './index';

export interface UpdateFilter {
  _id: string;
  filter: FilterProperties;
  value: string;
  _rev: string;
  enabled: boolean;
}
