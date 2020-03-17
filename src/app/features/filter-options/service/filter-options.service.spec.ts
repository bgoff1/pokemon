jest.mock('@resources/regions', () => ({
  __esModule: true,
  default: []
}));
jest.mock('@resources/extras', () => ({
  __esModule: true,
  default: []
}));
jest.mock('@models/pokemon/type', () => ({
  typeNames: ['Unknown']
}));
import { FilterOptionsService } from './filter-options.service';

describe('Filter Options Service', () => {
  let service: FilterOptionsService;

  beforeEach(() => {
    service = new FilterOptionsService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should convert to tree node', () => {
    const conversion = ['me'];
    const result = service.convertToTreeNode(conversion, 'Coverage');
    const expected = [{ name: 'Coverage', checked: false, value: 'me' }];
    expect(result).toEqual(expected);
  });

  test('should covert to tree node and make checked if passed', () => {
    const conversion = ['me'];
    const result = service.convertToTreeNode(conversion, 'Coverage', true);
    const expected = [{ name: 'Coverage', checked: true, value: 'me' }];
    expect(result).toEqual(expected);
  });

  test('should convert typeNames to treeNodes', () => {
    service.convertToTreeNode = jest.fn(val => val) as any;
    const result = service.types;
    expect(result).toEqual([]);
    expect(service.convertToTreeNode).toHaveBeenCalled();
  });

  test('should generate generations', () => {
    service.convertToTreeNode = jest.fn(val => val) as any;
    const result = service.generations;
    expect(result).toEqual([
      'Generation 1',
      'Generation 2',
      'Generation 3',
      'Generation 4',
      'Generation 5',
      'Generation 6',
      'Generation 7',
      'Generation 8'
    ]);
    expect(service.convertToTreeNode).toHaveBeenCalledWith(
      result,
      'Generations'
    );
  });

  test('should get typesNode', () => {
    expect(service.typesNode.children.length).toBe(0);
  });

  test('should get all nodes', () => {
    const treeNodes = service.treeData;
    expect(treeNodes.length).toBe(4);
    for (const node of treeNodes) {
      expect(node).toBeTruthy();
    }
  });
});
