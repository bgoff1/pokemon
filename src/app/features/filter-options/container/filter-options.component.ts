import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FilterService } from '@services/filter/filter.service';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { FilterProperties, Filter } from '@models/filter';
import { TreeNode } from '../models/tree-node.model';
import { FilterOptionsService } from '../service/filter-options.service';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {
  treeControl = new NestedTreeControl<TreeNode>(this.optionsService.getChild);
  descendantsAllChecked = this.optionsService.descendantsAllChecked;
  descendantsPartiallyChecked = this.optionsService.descendantsPartiallyChecked;
  hasChild = this.optionsService.hasChild;

  treeData = new MatTreeNestedDataSource<TreeNode>();

  searchFilter: Promise<Filter>;
  checkingCoverage = false;

  constructor(
    private readonly filterService: FilterService,
    private readonly optionsService: FilterOptionsService,
    private readonly pokemonService: PokemonService
  ) {
    this.filterService.createDatabase().then(() => this.initializeFilters());
  }

  initializeFilters() {
    this.filterService.getAllFilters().then(filters => {
      this.treeData.data = this.optionsService.generateTree(filters);
      for (const item of this.treeData.data) {
        if (item.expanded) {
          this.treeControl.expand(item);
        }
      }
    });
    this.searchFilter = this.filterService.getSearchFilter();
    this.checkingCoverage = this.filterService.checkingCoverage;
  }

  get treeHasData() {
    return this.treeData.data.length;
  }

  expand(node: TreeNode) {
    const previousValue =
      localStorage.getItem(node.name + 'expanded') === 'true';

    localStorage.setItem(node.name + 'expanded', String(!previousValue));
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
        _id: child.id,
        filter: FilterProperties[child.name],
        value: child.value,
        enabled: child.checked,
        _rev: child.rev
      }))
    );
  }

  handleNodeChange(node: TreeNode): void {
    node.checked = !node.checked;
    this.filterService.updateFilter({
      _id: node.id,
      filter: FilterProperties[node.name],
      value: node.value,
      _rev: node.rev
    });
  }

  handleCoverage() {
    this.filterService.checkCoverage(this.pokemonService.nonEmptyMembers);
    this.checkingCoverage = !this.checkingCoverage;
  }

  resetFilters() {
    this.filterService.resetFilters().then(this.initializeFilters);
  }

  get coverageText() {
    return this.checkingCoverage
      ? 'Showing Pokemon with Coverage'
      : 'Check Coverage';
  }

  get hasTeamMembers() {
    return this.pokemonService.nonEmptyMembers.length;
  }

  handleSearch(value: string) {
    this.filterService.addSearchFilter(value);
  }
}
