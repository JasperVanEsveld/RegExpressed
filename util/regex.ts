import { collect, taggedValues } from "./tagged-template.ts";

const reserved = [
  "\\",
  "+",
  "*",
  "?",
  "^",
  "$",
  ".",
  "[",
  "]",
  "{",
  "}",
  "(",
  ")",
  "|",
  "/",
];
const charReserved = ["\\", "-", "]"];
const charUnReserved = ["\\S", "\\s"];

export function escapeReserved(pattern: string) {
  let result = pattern;
  for (const reserve of reserved) {
    result = result.replaceAll(reserve, `\\${reserve}`);
  }
  return result;
}

export function escapeCharReserved(pattern: string) {
  let result = pattern;
  for (const reserve of charReserved) {
    result = result.replaceAll(reserve, `\\${reserve}`);
  }
  for (const unReserve of charUnReserved) {
    result = result.replaceAll(`\\${unReserve}`, unReserve);
  }
  return result;
}

export function asString(pattern: string | RegExp) {
  if (pattern instanceof RegExp) {
    return pattern.source;
  }
  let result = pattern;
  for (const reserve of reserved) {
    result = result.replaceAll(reserve, `\\${reserve}`);
  }
  return escapeReserved(pattern);
}

export function* toStringIter(
  strings: ReadonlyArray<string>,
  expressions: (RegExp | string)[]
) {
  for (const value of taggedValues(strings, expressions)) {
    if (value instanceof RegExp) {
      yield value.source;
    } else {
      yield value;
    }
  }
}

export function combine(
  strings: ReadonlyArray<string>,
  expressions: (RegExp | string)[]
) {
  const escapedStrings = strings.map((value) => escapeReserved(value));
  const iterator = toStringIter(escapedStrings, expressions);
  const values = collect(iterator);
  return values.join("");
}

export function combineChar(
  strings: ReadonlyArray<string>,
  expressions: (RegExp | string)[]
) {
  const escapedStrings = strings.map((value) => escapeCharReserved(value));
  const iterator = toStringIter(escapedStrings, expressions);
  const values = collect(iterator);
  return values.join("");
}

export type FlagOptions = {
  global?: boolean;
  ignoreCase?: boolean;
  multiline?: boolean;
  unicode?: boolean;
  sticky?: boolean;
  dotall?: boolean;
};
const flagValues: Record<keyof FlagOptions, string> = {
  global: "g",
  ignoreCase: "i",
  multiline: "m",
  unicode: "u",
  sticky: "y",
  dotall: "s",
};

export function flagsToString(options: FlagOptions) {
  let result = "";
  for (const [name, value] of Object.entries(options)) {
    if (value) {
      result += flagValues[name as keyof FlagOptions];
    }
  }
  return result;
}

export function createRegExpTag(map: (value: string) => string) {
  return (strings: ReadonlyArray<string>, ...expressions: RegExp[]) => {
    const value = combine(strings, expressions);
    return new RegExp(map(value));
  };
}
