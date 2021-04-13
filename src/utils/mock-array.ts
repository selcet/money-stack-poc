export function createMoneyStacksArray(start: number, end: number): string[] {
  return Array(end - start + 1).fill(start).map((_, idx) => (start + idx).toString());
}