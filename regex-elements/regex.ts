import { combine, FlagOptions, flagsToString } from "../util/mod.ts";

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
 * Creates a regex from a template string
 * Allows you to set the flags as well
 */
export function regexFlag(options?: FlagOptions) {
  return (strings: ReadonlyArray<string>, ...expressions: RegExp[]) => {
    if (options) {
      const flagString = flagsToString(options);
      return new RegExp(combine(strings, expressions), flagString);
    }
    return new RegExp(combine(strings, expressions));
  };
}
