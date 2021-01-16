import { FilterProperties } from './filter/filter.model';

export class TreeNode {
  id?: number;
  name!: keyof typeof FilterProperties;
  children!: TreeNode[];
  checked!: boolean;
  value!: string;
  expanded?: boolean;
}
