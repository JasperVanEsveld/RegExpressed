import { createRegExpTag } from "../util/mod.ts";

/**
 * `(input)`
 * 
 * Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
 */
export const group = createRegExpTag((value) => `(${value})`);

/**
 * `(?<name>input)`
 * 
 * Creates a capturing group that can be referenced via the specified name.
 */
export const namedGroup = (name: string) => {
  return createRegExpTag((value) => `(?<${name}>${value})`);
};

/**
 * `(input)`
 * 
 * Groups multiple tokens together without creating a capture group.
 */
 export const nonCaptureGroup = createRegExpTag((value) => `(?:${value})`);

/**
 * `\groupNumber`
 * 
 * Matches the results of a capture group. For example `\1` matches the results of the first capture group & `\3` matches the third.
 */
export const groupReference = (groupNumber: number) =>
  new RegExp(`\\${groupNumber}`);
