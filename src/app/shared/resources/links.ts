interface Link {
  path: string;
  links: string[];
}
const links: Link[] = [
  { path: 'team-builder', links: ['team-builder', 'nuzlocke'] },
  { path: 'nuzlocke', links: [] }
];
export default ['team-builder', 'nuzlocke'];
