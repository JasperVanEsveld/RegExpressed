// Char classes
/**
 * `.`
 *
 * Matches any character except linebreaks
 */
export const any = /./;

/**
 * `\w`
 *
 * Matches any character that is not a word character (alphanumeric & underscore)
 */
export const wordChar = /\w/;

/**
 * `\d`
 *
 * Matches any digit character (0-9).
 */
export const digit = /\d/;

/**
 * `\s`
 *
 * Matches any whitespace character (spaces, tabs, line breaks).
 */
export const whitespace = /\s/;

/**
 * `\W`
 *
 * Matches any word character (alphanumeric & underscore).
 * Only matches low-ascii characters (no accented or non-roman characters)
 */
export const notWordChar = /\W/;

/**
 * `\D`
 *
 * Matches any character that is not a digit character (0-9).
 */
export const notDigit = /\D/;

/**
 * `\S`
 *
 * Matches any character that is not a whitespace character (spaces, tabs, line breaks).
 */
export const notWhitespace = /\S/;

// Anchors
/**
 * `^`
 *
 * Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled.
 * This matches a position, not a character.
 */
export const beginning = /^/;

/**
 * `$`
 *
 * Matches the end of the string, or the end of a line if the multiline flag (m) is enabled.
 * This matches a position, not a character.
 */
export const end = /$/;

/**
 * `\b`
 *
 * Matches a word boundary position between a word character and non-word character or position (start / end of string).
 */
export const boundary = /\b/;

/**
 * `\B`
 *
 * Matches any position that is not a word boundary.
 * This matches a position, not a character.
 */
export const notBoundary = /\B/;

// Escaped
/**
 * `\t`
 *
 * Matches a TAB character (char code 9).
 */
export const tab = /\t/;

/**
 * `\n`
 *
 * Matches a LINE FEED character (char code 10).
 */
export const lineFeed = /\n/;

/**
 * `\v`
 *
 * Matches a VERTICAL TAB character (char code 11).
 */
export const verticalTab = /\v/;

/**
 * `\f`
 *
 * Matches a FORM FEED character (char code 12).
 */
export const formFeed = /\f/;

/**
 * `\r`
 *
 * Matches a CARRIAGE RETURN character (char code 13).
 */
export const carriageReturn = /\r/;

/**
 * `\0`
 *
 * Matches a NULL character (char code 0).
 */
export const nullChar = /\0/;
