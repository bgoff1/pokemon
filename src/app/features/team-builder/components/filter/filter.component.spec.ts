import { FilterOptionsComponent } from './filter.component';
import filterOptionsServiceMock from '../../mocks/filter-options.service.mock';
import filterServiceMock from '../../mocks/filter.service.mock';
import pokemonServiceMock from '../../mocks/pokemon.service.mock';
import { TreeNode } from '../../models/tree-node.model';

describe('Filter Options Component', () => {
  let component: FilterOptionsComponent;

  beforeEach(() => {
    component = new FilterOptionsComponent(
      filterServiceMock,
      filterOptionsServiceMock,
      pokemonServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create database and initialize filters on init', () => {
    component.initializeFilters = jest.fn();
    expect(() => component.ngOnInit()).not.toThrow();
  });

  test('should initialize filters', async () => {
    filterOptionsServiceMock.generateTree = jest.fn(() => [
      { expanded: true },
      { expanded: false }
    ]);
    component.treeControl.expand = jest.fn();
    filterServiceMock.checkingCoverage = false;
    await component.initializeFilters();
    expect(component.treeControl.expand).toBeCalledTimes(1);
  });

  test('should tell if tree has data', () => {
    component.treeData.data = [];
    expect(component.treeHasData).toBe(false);
  });

  test('should uncheck all children if parent is partially checked', () => {
    component.descendantsPartiallyChecked = jest.fn(() => true);
    const event = { source: { toggle: jest.fn() } } as any;
    const node = {
      children: [{ checked: true }, { checked: true }]
    } as any;

    component.selectionToggle(node, event);

    for (const child of node.children) {
      expect(child.checked).toBe(false);
    }
    expect(event.source.toggle).toBeCalled();
    expect(filterServiceMock.updateFilters).toBeCalled();
  });

  test('should flip checked for all children if parent is all (un)checked', () => {
    component.descendantsPartiallyChecked = jest.fn(() => false);
    const event = { source: { toggle: jest.fn() } } as any;
    const node = {
      children: [{ checked: false }, { checked: false }]
    } as any;

    component.selectionToggle(node, event);

    for (const child of node.children) {
      expect(child.checked).toBe(true);
    }
    expect(filterServiceMock.updateFilters).toBeCalled();
  });

  test('should handle node click and toggle the filter', () => {
    const node = new TreeNode();
    node.checked = true;
    component.handleNodeChange(node);
    expect(node.checked).toBe(false);
  });

  test('should trigger the filter service to handle the coverage', () => {
    component.checkingCoverage = true;
    component.handleCoverage();
    expect(component.checkingCoverage).toBe(false);
  });

  test('should reset filters', async () => {
    component.initializeFilters = jest.fn();
    let error = false;
    try {
      await component.resetFilters();
    } catch {
      error = true;
    }
    expect(error).toBe(false);
  });

  test('should display the right coverage message', () => {
    component.checkingCoverage = true;
    expect(component.coverageText).toEqual('Showing Pokemon with Coverage');
    component.checkingCoverage = false;
    expect(component.coverageText).toEqual('Check Coverage');
  });

  test('should tell if there are team members', () => {
    expect(component.hasTeamMembers).toBe(false);
  });

  test('should handle searching', () => {
    filterServiceMock.addSearchFilter = jest.fn(() => {
      throw new Error();
    });
    expect(() => component.handleSearch('a')).toThrow();
  });
});