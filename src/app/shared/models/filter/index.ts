export interface Filter {
  filter: FilterProperties;
  value: string;
  enabled?: boolean;
}

export enum FilterProperties {
  Coverage,
  Search,
  Regions,
  Types,
  Generations,
  Extras
}
