export function enumKeys<T extends string, V>(en: { [key in T]: V }): number[] {
  return (Object.keys(en) as T[])
    .filter((t) => typeof en[t] !== 'number')
    .map((num) => Number(num));
}

export function enumValues<T extends string, V = any>(
  en: { [key in T]: V }
): T[] {
  return (Object.keys(en) as T[]).filter(
    (t: T) => typeof en[t] === 'number'
  ) as T[];
}
