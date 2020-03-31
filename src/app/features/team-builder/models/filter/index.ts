export interface Filter {
  id?: number;
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
