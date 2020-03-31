import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FilterProperties, Filter } from '../../models/filter';
import { TreeNode } from '../../models/tree-node.model';
import { FilterService } from '../../services/filter/filter.service';
import { TeamService } from '../../services/team/team.service';
import { FilterTreeService } from '../../services/filter-tree/filter-tree.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterOptionsComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(this.optionsService.getChild);
  descendantsAllChecked = this.optionsService.descendantsAllChecked;
  descendantsPartiallyChecked = this.optionsService.descendantsPartiallyChecked;
  hasChild = this.optionsService.hasChild;

  treeData = new MatTreeNestedDataSource<TreeNode>();

  searchFilter: Promise<Filter>;
  checkingCoverage = false;

  constructor(
    private readonly filterService: FilterService,
    private readonly optionsService: FilterTreeService,
    private readonly teamService: TeamService
  ) {}

  ngOnInit() {
    this.filterService.createDatabase().then(() => this.initializeFilters());
  }

  async initializeFilters(): Promise<void> {
    this.searchFilter = this.filterService.getSearchFilter();
    this.checkingCoverage = this.filterService.checkingCoverage;
    const filters = await this.filterService.getAllFilters();
    this.treeData.data = this.optionsService.generateTree(filters);
  }

  get treeHasData() {
    return !!this.treeData.data.length;
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
    this.filterService.updateFilters(
      node.children.map(child => ({
        id: child.id,
        filter: FilterProperties[child.name],
        value: child.value,
        enabled: child.checked ? 1 : 0
      }))
    );
  }

  handleNodeChange(node: TreeNode): void {
    node.checked = !node.checked;
    this.filterService.updateFilter({
      id: node.id,
      filter: FilterProperties[node.name],
      value: node.value,
      enabled: node.checked ? 1 : 0
    });
  }

  handleCoverage(): void {
    this.filterService.checkCoverage(this.teamService.team);
    this.checkingCoverage = !this.checkingCoverage;
  }

  async resetFilters(): Promise<void> {
    await this.filterService.resetFilters();
    this.initializeFilters();
  }

  get coverageText() {
    return this.checkingCoverage
      ? 'Showing Pokemon with Coverage'
      : 'Check Coverage';
  }

  get hasTeamMembers(): boolean {
    return !!this.teamService.team.length;
  }

  handleSearch(value: string): Promise<void> {
    return this.filterService.addSearchFilter(value);
  }
}
