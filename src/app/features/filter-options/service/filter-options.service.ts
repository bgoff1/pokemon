import { Injectable } from '@angular/core';
import { typeNames } from '@models/pokemon/type';
import regions from '@resources/regions';
import extras from '@resources/extras';
import { TreeNode } from '../models/tree-node.model';
import { RomanService } from '@shared/services/roman/roman.service';
import { FilterProperties } from '@models/filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterOptionsService {
  private numberOfGenerations = 8;
  constructor(private readonly romanService: RomanService) {}

  convertToTreeNode(
    conversion: string[],
    name: keyof typeof FilterProperties,
    checked?: boolean
  ): TreeNode[] {
    checked = checked || false;
    return conversion.map(value => ({
      name,
      checked,
      value
    }));
  }

  get types(): TreeNode[] {
    return this.convertToTreeNode(
      typeNames.filter(type => type !== 'Unknown'),
      'Types'
    );
  }

  get generations(): TreeNode[] {
    const gens: string[] = [];
    for (let i = 1; i <= this.numberOfGenerations; ++i) {
      gens.push('Generation ' + this.romanService.romanize(i));
    }
    return this.convertToTreeNode(gens, 'Generations');
  }

  get typesNode(): TreeNode {
    return {
      name: 'Types',
      children: this.types,
      checked: false,
      value: ''
    };
  }

  get regionsNode(): TreeNode {
    return {
      name: 'Regions',
      children: this.convertToTreeNode(regions, 'Regions'),
      checked: false,
      value: ''
    };
  }

  get extrasNode(): TreeNode {
    return {
      name: 'Extras',
      children: this.convertToTreeNode(extras, 'Extras', true),
      checked: true,
      value: ''
    };
  }

  get generationsNode(): TreeNode {
    return {
      name: 'Generations',
      children: this.generations,
      checked: false,
      value: ''
    };
  }

  get treeData() {
    return [
      this.typesNode,
      this.regionsNode,
      this.extrasNode,
      this.generationsNode
    ];
  }
}
