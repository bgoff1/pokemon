export interface Pokemon {
  name: string;
  nickName?: string;
  routeName: string;
  status: Status;
}

export enum Status {
  Party,
  Boxed,
  Heaven,
  Missed
}
