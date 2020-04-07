export interface Pokemon {
  name: string;
  nickName?: string;
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
