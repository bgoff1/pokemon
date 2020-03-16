import { Component, OnInit } from '@angular/core';
import { FilterProperties, Filter } from '@models/filter/filter.model';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {
  TreeNode,
  getChild,
  descendantsAllChecked,
  hasChild,
  descendantsPartiallyChecked
} from '../models/tree-node.model';
import { FilterOptionsService } from '../service/filter-options.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FilterService } from '@shared/services/filter/filter.service';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(getChild);
  descendantsAllChecked = descendantsAllChecked;
  descendantsPartiallyChecked = descendantsPartiallyChecked;
  hasChild = hasChild;

  treeData = new MatTreeNestedDataSource<TreeNode>();

  filters: Filter[] = [];
  checkingCoverage = false;

  constructor(
    private readonly optionsService: FilterOptionsService,
    private readonly filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.initializeFilters();
  }

  initializeFilters() {
    this.filters = this.filterService.filters;
    this.treeData.data = this.optionsService.treeData;
    for (const filter of this.filters) {
      this.updateTreeValues(filter);
    }
    this.checkingCoverage = !!this.filters.find(
      filter => filter.property === FilterProperties.Coverage
    );
  }

  saveFilters() {
    this.filterService.filters = this.filters;
  }

  updateTreeValues(filter: Filter): void {
    const parent = this.treeData.data.find(
      node => node.name === FilterProperties[filter.property]
    );
    if (parent) {
      for (const child of parent.children) {
        if (child.value === filter.value) {
          child.checked = true;
          return;
        }
      }
    }
  }

  selectionToggle(node: TreeNode, event: MatCheckboxChange): void {
    if (this.descendantsPartiallyChecked(node)) {
      for (const child of node.children) {
        child.checked = false;
      }
      event.source.toggle();
    } else {
      for (const child of node.children) {
        child.checked = !child.checked;
      }
    }
    this.updateFilters(node);
  }

  updateFilters(parent: TreeNode): void {
    const checkedSiblingsAndSelf = parent.children.filter(
      child => child.checked
    );
    const filters = this.filters.filter(
      filter => filter.property !== FilterProperties[parent.name]
    );
    this.filters = [
      ...filters,
      ...checkedSiblingsAndSelf.map(node => ({
        value: node.value,
        property: FilterProperties[node.name]
      }))
    ];
    this.saveFilters();
  }

  handleNodeChange(node: TreeNode): void {
    node.checked = !node.checked;
    this.updateFilters(this.findNodeParent(node));
  }

  findNodeParent(node: TreeNode) {
    return this.treeData.data.find(parent =>
      parent.children.find(child => child === node)
    );
  }

  handleCoverage() {
    this.filters = this.filters.filter(
      filter => filter.property !== FilterProperties.Coverage
    );
    this.filterService.checkingCoverage = this.checkingCoverage = !this
      .checkingCoverage;
    const coverageFilter = this.filterService.checkCoverage();
    if (coverageFilter) {
      this.filters.push(coverageFilter);
    }
    this.saveFilters();
  }

  hasNoMembers() {
    return !this.filterService.isTeamMembers;
  }

  resetFilters() {
    this.filterService.resetFilters();
    this.initializeFilters();
    this.saveFilters();
  }

  get coverageText() {
    return this.checkingCoverage
      ? 'Showing Pokemon with Coverage'
      : 'Check Coverage';
  }

  get searchFilter() {
    return this.filters.find(
      filter => filter.property === FilterProperties.Search
    );
  }

  handleSearch(value: string) {
    this.filters = this.filters.filter(
      filter => filter.property !== FilterProperties.Search
    );
    if (value !== '') {
      this.filters.push({ property: FilterProperties.Search, value });
    }
    this.saveFilters();
  }
}
