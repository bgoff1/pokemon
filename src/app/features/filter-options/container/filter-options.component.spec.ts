import { FilterOptionsComponent } from './filter-options.component';
import filterOptionsServiceMock from '@mocks/filter-options.service.mock';
import filterServiceMock from '@mocks/filter.service.mock';
import { TreeNode } from '../models/tree-node.model';
import teamServiceMock from '@mocks/team.service.mock';

describe('Filter Options Component', () => {
  let component: FilterOptionsComponent;

  beforeEach(() => {
    component = new FilterOptionsComponent(
      filterServiceMock,
      filterOptionsServiceMock,
      teamServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should reset filters', () => {
    filterServiceMock.resetFilters = jest.fn();
    component.initializeFilters = jest.fn();
    component.resetFilters();
    expect(filterServiceMock.resetFilters).toHaveBeenCalled();
    expect(component.initializeFilters).toHaveBeenCalled();
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

  test('should toggle all checked children if parent is clicked', () => {
    component.descendantsPartiallyChecked = jest.fn(() => true);
    const node: TreeNode = {
      name: 'Coverage',
      value: '',
      checked: false,
      children: [
        {
          name: 'Coverage',
          value: '',
          checked: true,
          rev: ''
        }
      ],
      rev: ''
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

  test('should handle coverage', () => {
    component.checkingCoverage = true;
    filterServiceMock.checkingCoverage = true;
    filterServiceMock.checkCoverage = jest.fn(() => ({
      name: 'a'
    }));
    component.handleCoverage();
    expect(component.checkingCoverage).toBe(false);
  });

  test('should handle coverage', () => {
    component.checkingCoverage = true;
    filterServiceMock.checkingCoverage = true;
    filterServiceMock.checkCoverage = jest.fn(() => ({
      name: 'a'
    }));
    component.handleCoverage();
    expect(component.checkingCoverage).toBe(false);
  });

  test('should not add if coverage returns null', () => {
    filterServiceMock.checkCoverage = jest.fn(() => null);
    component.handleCoverage();
  });
});
