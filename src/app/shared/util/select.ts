export function firstNum<T>(array: T[], num: number, offset?: number): T[] {
  const result = [];
  const start = offset ? offset + 0 : 0;
  const end = offset ? offset + num : num;
  for (let i = start; i < end; ++i) {
    result.push(array[i]);
  }
  return result;
}
