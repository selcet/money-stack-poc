/**
 * TypeScript-specific utility function to help with execution flow,
 * e.g. can be used to create exhaustive switch.
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
export function assertNever(x: never): never {
  throw new Error('assertNever: ' + x);
}