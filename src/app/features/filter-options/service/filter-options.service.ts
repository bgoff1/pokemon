import { Injectable } from '@angular/core';
import { Filter, FilterProperties } from '@models/filter';
import { TreeNode } from '../models/tree-node.model';

@Injectable({
  providedIn: 'root'
})
export class FilterOptionsService {
  generateTree(filters: Filter[]): TreeNode[] {
    let filterType: keyof typeof FilterProperties = this.getFilterType(
      filters[0]
    );
    const result: TreeNode[] = [];
    let children: TreeNode[] = [];
    for (const filter of filters) {
      if (filterType !== FilterProperties[filter.filter]) {
        result.push({
          checked: null,
          children,
          value: filterType,
          name: filterType
        });
        filterType = this.getFilterType(filter);
        children = [this.createChild(filter, filterType)];
      } else {
        children.push(this.createChild(filter, filterType));
      }
    }
    result.push({
      checked: null,
      children,
      value: filterType,
      name: filterType
    });
    return result;
  }

  createChild(filter: Filter, filterType: keyof typeof FilterProperties) {
    return {
      checked: filter.enabled ? true : false,
      value: filter.value,
      name: filterType
    };
  }

  getFilterType(filter: Filter): keyof typeof FilterProperties {
    return FilterProperties[filter.filter] as keyof typeof FilterProperties;
  }

  getChild(treeNode: TreeNode) {
    return treeNode.children;
  }

  descendantsAllChecked(node: TreeNode): boolean {
    return node.children.every(child => child.checked);
  }

  descendantsPartiallyChecked(node: TreeNode): boolean {
    return (
      node.children.some(child => child.checked) &&
      !node.children.every(child => child.checked)
    );
  }

  hasChild(_: number, node: TreeNode): boolean {
    return !!node.children && node.children.length > 0;
  }
}
