import { FilterProperties } from '@models/filter/filter.model';

export class TreeNode {
  name: keyof typeof FilterProperties;
  children?: TreeNode[];
  checked: boolean;
  value: string;
}

export const getChild = (treeNode: TreeNode) => treeNode.children;

export const descendantsAllChecked = (node: TreeNode): boolean => {
  return node.children.every(child => child.checked);
};

export const descendantsPartiallyChecked = (node: TreeNode): boolean => {
  return (
    node.children.some(child => child.checked) &&
    !node.children.every(child => child.checked)
  );
};

export const hasChild = (_: number, node: TreeNode): boolean => {
  return !!node.children && node.children.length > 0;
};
