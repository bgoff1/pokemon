import { FilterOptionsService } from './filter-options.service';
import { TreeNode } from '../models/tree-node.model';
import { FilterProperties, Filter } from '@models/filter';
import filterMocks from '@mocks/filters.mock';

describe('Filter Options Service', () => {
  let service: FilterOptionsService;

  beforeEach(() => {
    service = new FilterOptionsService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get child', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [],
      value: '',
      rev: ''
    };
    expect(service.getChild(treeNode)).toEqual([]);
  });

  test('should get if all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [
        {
          name: 'Coverage',
          checked: true,
          value: '',
          rev: ''
        }
      ],
      value: '',
      rev: ''
    };
    expect(service.descendantsAllChecked(treeNode)).toBe(true);
  });

  test('should get if some but not all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [
        {
          name: 'Coverage',
          checked: true,
          value: '',
          rev: ''
        },
        {
          name: 'Coverage',
          checked: false,
          value: '',
          rev: ''
        }
      ],
      rev: '',
      value: ''
    };
    expect(service.descendantsPartiallyChecked(treeNode)).toBe(true);
  });

  test('should get if some but not all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [],
      value: '',
      rev: ''
    };
    expect(service.hasChild(0, treeNode)).toBe(false);
  });

  test('should get filter name from filter', () => {
    expect(
      service.getFilterType({ filter: FilterProperties.Coverage } as any)
    ).toEqual(FilterProperties[FilterProperties.Coverage]);
  });

  test('should create a child', () => {
    expect(
      service.createChild(
        {
          filter: FilterProperties.Coverage,
          enabled: true,
          value: '',
          _id: '',
          _rev: '',
          expanded: false
        },
        'Coverage'
      )
    ).toEqual({ id: '', checked: true, value: '', name: 'Coverage', rev: '' });
    expect(
      service.createChild(
        {
          filter: FilterProperties.Coverage,
          enabled: false,
          value: '',
          _id: '',
          _rev: '',
          expanded: false
        },
        'Coverage'
      )
    ).toEqual({ id: '', checked: false, value: '', name: 'Coverage', rev: '' });
  });

  test('should return empty if no filters', () => {
    expect(service.generateTree([])).toEqual([]);
  });

  test('should create tree', () => {
    const filters = filterMocks;
    filters.push({ filter: FilterProperties.Coverage, value: '', _id: '0' });

    service.getFilterType = jest.fn(
      filter => FilterProperties[filter.filter]
    ) as any;
    service.createChild = jest.fn(() => true) as any;
    localStorage.getItem = jest.fn(() => 'a');

    expect(service.generateTree(filters)).toEqual([
      {
        checked: null,
        children: [true, true, true],
        value: 'Extras',
        name: 'Extras',
        expanded: false,
        rev: 'parent'
      },
      {
        checked: null,
        children: [true],
        value: 'Coverage',
        name: 'Coverage',
        expanded: false,
        rev: 'parent'
      }
    ]);
  });
});
