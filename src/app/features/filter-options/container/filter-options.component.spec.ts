import { FilterOptionsComponent } from './filter-options.component';
import filterOptionsServiceMock from '@mocks/filter-options.service.mock';
import filterServiceMock from '@mocks/filter.service.mock';
import { FilterProperties } from '@models/filter';
import { TreeNode } from '../models/tree-node.model';

describe('Filter Options Component', () => {
  let component: FilterOptionsComponent;

  beforeEach(() => {
    component = new FilterOptionsComponent(
      filterOptionsServiceMock,
      filterServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add filter on search', () => {
    component.filters = [{ filter: FilterProperties.Search, value: '' }];
    component.handleSearch('abc');
    expect(component.filters.length).toBe(1);
  });

  test('should not add filter on search if search is empty', () => {
    component.filters = [{ filter: FilterProperties.Search, value: '' }];
    component.handleSearch('');
    expect(component.filters.length).toBe(0);
  });

  test('should reset filters', () => {
    filterServiceMock.resetFilters = jest.fn();
    component.initializeFilters = jest.fn();
    component.saveFilters = jest.fn();
    component.resetFilters();
    expect(filterServiceMock.resetFilters).toHaveBeenCalled();
    expect(component.saveFilters).toHaveBeenCalled();
    expect(component.initializeFilters).toHaveBeenCalled();
  });

  test('should get search filter if it exists', () => {
    component.filters = [{ filter: FilterProperties.Search, value: '' }];
    const result = component.searchFilter;
    expect(result).toEqual({ filter: FilterProperties.Search, value: '' });
  });

  test('should return undefined if no search filter', () => {
    expect(component.searchFilter).toBeFalsy();
  });

  test('should show the right coverage text', () => {
    component.checkingCoverage = true;
    expect(component.coverageText).toEqual('Showing Pokemon with Coverage');
    component.checkingCoverage = false;
    expect(component.coverageText).toEqual('Check Coverage');
  });

  test('should update the tree on node change', () => {
    component.updateFilters = jest.fn();
    const node: TreeNode = {
      name: 'Coverage',
      checked: false,
      value: ''
    };
    component.handleNodeChange(node);
    expect(node.checked).toBe(true);
  });

  test('should find node parent', () => {
    const node: TreeNode = {
      name: 'Coverage',
      checked: false,
      value: ''
    };
    const parent: TreeNode = {
      name: 'Extras',
      checked: false,
      children: [node],
      value: ''
    };
    component.treeData = {
      data: [parent]
    } as any;
    expect(component.findNodeParent(node)).toEqual(parent);
  });

  test('should update filters properly', () => {
    component.filters = [{ filter: FilterProperties.Extras, value: '' }];
    component.updateFilters({
      name: 'Coverage',
      value: '',
      children: [
        { name: 'Coverage', value: '', checked: true },
        { name: 'Coverage', value: '', checked: false }
      ],
      checked: true
    });
    expect(component.filters.length).toBe(2);
  });

  test('should toggle all checked children if parent is clicked', () => {
    component.descendantsPartiallyChecked = jest.fn(() => false);
    component.updateFilters = jest.fn();
    const node: TreeNode = {
      name: 'Coverage',
      value: '',
      checked: false,
      children: [
        {
          name: 'Coverage',
          value: '',
          checked: false
        }
      ]
    };
    component.selectionToggle(node, null);
    expect(node.children[0].checked).toBe(true);
  });

  test('should toggle all checked children if parent is clicked', () => {
    component.descendantsPartiallyChecked = jest.fn(() => true);
    component.updateFilters = jest.fn();
    const node: TreeNode = {
      name: 'Coverage',
      value: '',
      checked: false,
      children: [
        {
          name: 'Coverage',
          value: '',
          checked: true
        }
      ]
    };
    const event = {
      source: {
        toggle: jest.fn()
      }
    };
    component.selectionToggle(node, event as any);
    expect(node.children[0].checked).toBe(false);
    expect(event.source.toggle).toHaveBeenCalled();
  });

  test('should update tree values', () => {
    component.updateTreeValues = jest.fn();
    component.ngOnInit();
    expect(component.updateTreeValues).toHaveBeenCalled();
  });

  test('should not update if value does not match filter', () => {
    const child: TreeNode = { name: 'Extras', value: 'a', checked: false };
    const root: TreeNode = {
      name: 'Coverage',
      value: '',
      checked: false,
      children: [child]
    };
    component.treeData.data = [root] as TreeNode[];
    component.updateTreeValues({
      filter: FilterProperties.Coverage,
      value: ''
    });
    expect(child.checked).toBe(false);
  });

  test('should update if value does match filter', () => {
    const child: TreeNode = { name: 'Coverage', value: 'a', checked: false };
    const root: TreeNode = {
      name: 'Coverage',
      value: '',
      checked: false,
      children: [child]
    };
    component.treeData.data = [root] as TreeNode[];
    component.updateTreeValues({
      filter: FilterProperties.Coverage,
      value: 'a'
    });
    expect(child.checked).toBe(true);
  });

  test('should not look at children if there is no parent', () => {
    const root: TreeNode = {
      name: 'Coverage',
      value: '',
      checked: false,
      children: []
    };
    component.treeData.data = [root] as TreeNode[];
    component.updateTreeValues({
      filter: FilterProperties.Extras,
      value: ''
    });
    expect(root.checked).toBe(false);
  });

  test('should tell if team has no members', () => {
    filterServiceMock.isTeamMembers = true;
    expect(component.hasNoMembers()).toBe(false);
  });

  test('should handle coverage', () => {
    component.checkingCoverage = true;
    filterServiceMock.checkingCoverage = true;
    component.filters = [
      { filter: FilterProperties.Extras, value: '' },
      { filter: FilterProperties.Coverage, value: '' }
    ];
    filterServiceMock.checkCoverage = jest.fn(() => ({
      name: 'a'
    }));
    component.handleCoverage();
    expect(component.checkingCoverage).toBe(false);
  });

  test('should not add if coverage returns null', () => {
    filterServiceMock.checkCoverage = jest.fn(() => null);
    component.filters = [];
    component.handleCoverage();
    expect(component.filters.length).toBe(0);
  });

  test('should tell if team has no members', () => {
    filterServiceMock.isTeamMembers = true;
    expect(component.hasNoMembers()).toBe(false);
  });

  test('should handle coverage', () => {
    component.checkingCoverage = true;
    filterServiceMock.checkingCoverage = true;
    component.filters = [
      { filter: FilterProperties.Extras, value: '' },
      { filter: FilterProperties.Coverage, value: '' }
    ];
    filterServiceMock.checkCoverage = jest.fn(() => ({
      name: 'a'
    }));
    component.handleCoverage();
    expect(component.checkingCoverage).toBe(false);
  });

  test('should not add if coverage returns null', () => {
    filterServiceMock.checkCoverage = jest.fn(() => null);
    component.filters = [];
    component.handleCoverage();
    expect(component.filters.length).toBe(0);
  });
});
