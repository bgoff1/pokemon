export interface Filter {
  id: number;
  filter: FilterProperties;
  value: string;
  enabled?: number;
}

export enum FilterProperties {
  Coverage,
  Search,
  Types,
  Regions,
  Generations,
  Extras
}

export const defaultFilter: Filter = {
  filter: FilterProperties.Coverage,
  value: '',
  id: -1
};
