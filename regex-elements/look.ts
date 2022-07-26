import { createRegExpTag } from "../util/mod.ts";

/**
 * `(?=input)`
 *
 * Matches a group after the main expression without including it in the result.
 */
export const lookahead = createRegExpTag((value) => `(?=${value})`);

/**
 * `(?!input)`
 *
 * Specifies a group that can not match after the main expression (if it matches, the result is discarded).
 */
export const notLookahead = createRegExpTag((value) => `(?!${value})`);

/**
 * `(?<=input)`
 *
 * Matches a group before the main expression without including it in the result.
 */
export const lookbehind = createRegExpTag((value) => `(?<=${value})`);

/**
 * `(?<!input)`
 *
 * Specifies a group that can not match before the main expression (if it matches, the result is discarded).
 */
export const notLookbehind = createRegExpTag((value) => `(?<!${value})`);
