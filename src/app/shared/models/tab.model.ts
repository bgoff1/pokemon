export interface Tab {
  path: string;
  links: TabLink[];
}
export interface TabLink {
  route: string;
  name: string;
}
