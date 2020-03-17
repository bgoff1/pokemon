import { Component, OnInit } from '@angular/core';
import { FilterProperties, Filter } from '@models/filter';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from '../models/tree-node.model';
import { FilterOptionsService } from '../service/filter-options.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FilterService } from '@services/filter/filter.service';
import { TeamService } from '@services/team/team.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(this.optionsService.getChild);
  descendantsAllChecked = this.optionsService.descendantsAllChecked;
  descendantsPartiallyChecked = this.optionsService.descendantsPartiallyChecked;
  hasChild = this.optionsService.hasChild;

  treeData = new MatTreeNestedDataSource<TreeNode>();

  filters: Filter[] = [];
  searchFilter: Observable<Filter>;
  checkingCoverage = false;

  constructor(
    private readonly optionsService: FilterOptionsService,
    private readonly filterService: FilterService,
    private readonly teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.initializeFilters();
  }

  initializeFilters() {
    this.filters = this.filterService.filters;
    this.filterService.getAllFilters().then(filters => {
      this.treeData.data = this.optionsService.generateTree(filters);
    });
    this.searchFilter = this.filterService.getSearchFilter();
    this.checkingCoverage = this.filterService.checkingCoverage;
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
      filter => filter.filter !== FilterProperties[parent.name]
    );
    this.filters = [
      ...filters,
      ...checkedSiblingsAndSelf.map(node => ({
        value: node.value,
        filter: FilterProperties[node.name]
      }))
    ];
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
      filter => filter.filter !== FilterProperties.Coverage
    );
    this.checkingCoverage = !this.checkingCoverage;
  }

  hasNoMembers() {
    return !this.teamService.nonEmptyMembers.length;
  }

  resetFilters() {
    this.filterService.resetFilters();
    this.initializeFilters();
  }

  get coverageText() {
    return this.checkingCoverage
      ? 'Showing Pokemon with Coverage'
      : 'Check Coverage';
  }

  handleSearch(value: string) {
    this.filters = this.filters.filter(
      filter => filter.filter !== FilterProperties.Search
    );
    if (value !== '') {
      this.filters.push({ filter: FilterProperties.Search, value });
    }
  }
}
