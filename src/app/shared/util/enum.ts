export function enumKeys<T extends string, V>(en: { [key in T]: V }) {
  return Object.keys(en)
    .filter((t: T) => typeof en[t] !== 'number')
    .map(num => Number(num));
}

export function enumValues<T extends string, V>(en: { [key in T]: V }) {
  return Object.keys(en).filter((t: T) => typeof en[t] === 'number') as T[];
}
