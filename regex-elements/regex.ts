import { asString, combine, FlagOptions, flagsToString } from "../util/mod.ts";

/**
 * Creates a regex from a template string
 */
export function regex(
  strings: ReadonlyArray<string>,
  ...expressions: RegExp[]
) {
  return new RegExp(combine(strings, expressions));
}

/**
 * `/input/flags`
 *
 * Creates a new regex with added flags
 */
export function flag(input: string | RegExp, options: FlagOptions) {
  const matchString = asString(input);
  const flagString = flagsToString(options);
  return new RegExp(matchString, flagString);
}
