import { FilterProperties } from './filter';

export class TreeNode {
  id?: number;
  name: keyof typeof FilterProperties;
  children?: TreeNode[];
  checked: boolean;
  value: string;
  expanded?: boolean;
}
