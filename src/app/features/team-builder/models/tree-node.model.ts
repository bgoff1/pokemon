import { FilterProperties } from './filter';

export class TreeNode {
  id?: string;
  name: keyof typeof FilterProperties;
  children?: TreeNode[];
  checked: boolean;
  value: string;
  expanded?: boolean;
  rev: string;
}
