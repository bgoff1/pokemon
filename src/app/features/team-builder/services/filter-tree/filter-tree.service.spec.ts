jest.mock('@util/enum');
import { FilterTreeService } from './filter-tree.service';
import { TreeNode } from '../../models/tree-node.model';
import { FilterProperties } from '../../models/filter';
import filterMocks from '../../mocks/filters.mock';

describe('Filter Options Service', () => {
  let service: FilterTreeService;

  beforeEach(() => {
    service = new FilterTreeService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get child', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [],
      value: ''
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
          value: ''
        }
      ],
      value: ''
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
          value: ''
        },
        {
          name: 'Coverage',
          checked: false,
          value: ''
        }
      ],
      value: ''
    };
    expect(service.descendantsPartiallyChecked(treeNode)).toBe(true);
  });

  test('should get if some but not all descendants are checked', () => {
    const treeNode: TreeNode = {
      name: 'Coverage',
      checked: false,
      children: [],
      value: ''
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
          enabled: 1,
          value: '',
          id: 1
        },
        'Coverage'
      )
    ).toEqual({ id: 1, checked: true, value: '', name: 'Coverage' });
    expect(
      service.createChild(
        {
          filter: FilterProperties.Coverage,
          enabled: 0,
          value: '',
          id: 1
        },
        'Coverage'
      )
    ).toEqual({ id: 1, checked: false, value: '', name: 'Coverage' });
  });

  test('should return empty if no filters', () => {
    expect(service.generateTree([])).toEqual([]);
  });

  test('should create tree', () => {
    const filters = filterMocks;
    filters.push({ filter: FilterProperties.Coverage, value: '', id: 0 });

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
        expanded: false
      },
      {
        checked: null,
        children: [true],
        value: 'Coverage',
        name: 'Coverage',
        expanded: false
      }
    ]);
  });
});
