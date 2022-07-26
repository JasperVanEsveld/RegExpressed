/**
 *  `\number`
 *
 * Octal escaped character, number must be less than 255.
 */
export const ocatal = (number: number) => {
  const numberString = ("00" + number).slice(-3);
  new RegExp(`\\${numberString}`);
};

/**
 *  `\hex`
 *
 * Hexadecimal escaped character in the form \xFF.
 */
export const hexChar = (hex: string) => new RegExp(`\\x${hex}`);

/**
 *  `\u{code}`
 *
 * REQUIRES UNICODE FLAG
 *
 * Unicode escaped character in the form \u{FFFF}
 *
 */
export const unicodeChar = (code: string) => new RegExp(`\\u{${code}}`);

/**
 *  `\cChar`
 *
 * Escaped control character in the form \cZ. This can range from \cA (SOH, char code 1) to \cZ (SUB, char code 26).
 */
export const controlChar = (char: string) => new RegExp(`\\c${char}`);

/**
 *  `\p{value}`
 *
 * REQUIRES UNICODE FLAG
 *
 * Matches a character in the specified unicode category or script. For example, \p{Ll} will match any lowercase letter and \p{Arabic} will match characters in the Arabic script.
 */
export const unicode = (value: string) => new RegExp(`\\p{${value}}`);

/**
 *  `\p{value}`
 *
 * REQUIRES UNICODE FLAG
 *
 * Matches any character that is not in the specified unicode category or script.
 */
export const notUnicode = (value: string) => new RegExp(`\\P{${value}}`);
