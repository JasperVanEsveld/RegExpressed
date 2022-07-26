import { asString, createRegExpTag } from "../util/regex.ts";

/**
 * `(?:input)+`
 *
 * Matches 1 or more times.
 */
export const oneOrMore = createRegExpTag((value) => `(?:${value})+`);

/**
 * `(?:input)+?`
 *
 * Lazily matches 1 or more times.
 */
export const oneOrMoreLazy = createRegExpTag((value) => `(?:${value})+?`);

/**
 * `(?:input)*`
 *
 * Matches 0 or more times.
 */
export const zeroOrMore = createRegExpTag((value) => `(?:${value})*`);

/**
 * `(?:input)*?`
 *
 * Lazily matches 0 or more times.
 */
export const zeroOrMoreLazy = createRegExpTag((value) => `(?:${value})*?`);

/**
 * `(?:input){min,max}`
 * or
 * `(?:input){min,}`
 *
 * Matches the specified quantity.
 *
 * Example quantity(1,3) will match 1 to 3 times,
 * quantity(3,3) will match exactly 3 and
 * quantity(3) will match 3 or more.
 */
export const quantity = (min: number, max?: number) => {
  if (max === undefined) {
    return createRegExpTag((value) => `(?:${value}){${min},}`);
  }
  return createRegExpTag((value) => `(?:${value}){${min},${max}}`);
};

/**
 * `(?:input){min,max}`
 *
 * Lazily matches the specified quantity.
 *
 * Example {1,3} will match 1 to 3. {3} will match exactly 3. {3,} will match 3 or more.
 */
export const quantityLazy = (min: number, max?: number) => {
  if (max === undefined) {
    return createRegExpTag((value) => `(?:${value}){${min},}?`);
  }
  return createRegExpTag((value) => `(?:${value}){${min},${max}}?`);
};

/**
 * `(?:input)?`
 *
 * Matches 0 or 1 times, effectively making it optional.
 */
export const optional = createRegExpTag((value) => `(?:${value})?`);

/**
 * `(?:input)??`
 *
 * Lazily matches 0 or 1 times, effectively making it optional.
 */
export const optionalLazy = createRegExpTag((value) => `(?:${value})??`);

/**
 * `(?:(?:input1)|(?:input2))`
 *
 * Acts like a boolean OR, patterns are tested in order.
 */
export const or = (...patterns: (string | RegExp)[]) => {
  const values = patterns.map(asString).map((value) => `(?:${value})`);
  return new RegExp(`(?:${values.join("|")})`);
};
