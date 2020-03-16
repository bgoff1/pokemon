import {
  getChild,
  TreeNode,
  descendantsAllChecked,
  descendantsPartiallyChecked,
  hasChild
} from './tree-node.model';

describe('Tree Node Model', () => {
  test('should get child', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [],
      value: ''
    };
    expect(getChild(treeNode)).toEqual([]);
  });

  test('should get if all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [
        {
          name: 'Coverage',
          checked: true,
          value: ''
        }
      ],
      value: ''
    };
    expect(descendantsAllChecked(treeNode)).toBe(true);
  });

  test('should get if some but not all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [
        {
          name: 'Coverage',
          checked: true,
          value: ''
        },
        {
          name: 'Coverage',
          checked: false,
          value: ''
        }
      ],
      value: ''
    };
    expect(descendantsPartiallyChecked(treeNode)).toBe(true);
  });

  test('should get if some but not all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [],
      value: ''
    };
    expect(hasChild(0, treeNode)).toBe(false);
  });
});
