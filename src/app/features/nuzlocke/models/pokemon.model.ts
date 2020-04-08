export interface Pokemon {
  name: string;
  nickname?: string;
  routeName: string;
  status: Status;
  routeId?: number;
}

export enum Status {
  Party,
  Boxed,
  Heaven,
  Missed
}
