import { combineChar, escapeCharReserved } from "../util/regex.ts";

/**
 * `[input]`
 *
 * Match any character in the set.
 */
export function charset(
  strings: ReadonlyArray<string>,
  ...expressions: RegExp[]
): RegExp {
  let value = combineChar(strings, expressions);
  if (value.startsWith("^")) {
    value = `\\${value}`;
  }
  return new RegExp(`[${value}]`);
}

/**
 * `[^input]`
 *
 * Match any character that is NOT in the set.
 */
export function notCharset(
  strings: ReadonlyArray<string>,
  ...expressions: RegExp[]
): RegExp {
  const value = combineChar(strings, expressions);
  return new RegExp(`[^${value}]`);
}

/**
 * `a-z`
 *
 * USE ONLY IN CHARSET
 *
 * Matches a character having a character code between the two specified characters inclusive.
 */
export function range(from: string, to: string): RegExp {
  return new RegExp(`${escapeCharReserved(from)}-${escapeCharReserved(to)}`);
}
