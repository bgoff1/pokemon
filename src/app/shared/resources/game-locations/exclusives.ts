export function filterExclusives(
  isFirst: boolean,
  potentialEncounters: string[],
  exclusives: [string[], string[]]
): string[] {
  return isFirst
    ? potentialEncounters.filter(
        (encounter) => !exclusives[1].includes(encounter)
      )
    : potentialEncounters.filter(
        (encounter) => !exclusives[0].includes(encounter)
      );
}
