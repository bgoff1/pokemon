export interface Filter {
  _id: string;
  filter: FilterProperties;
  value: string;
  enabled?: boolean;
  expanded?: boolean;
  _rev?: string;
}

export enum FilterProperties {
  Coverage,
  Search,
  Types,
  Regions,
  Generations,
  Extras
}
