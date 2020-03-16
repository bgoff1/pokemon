export interface Filter {
  property: FilterProperties;
  value: string;
}

export enum FilterProperties {
  Coverage,
  Search,
  Regions,
  Types,
  Generations,
  Extras
}
