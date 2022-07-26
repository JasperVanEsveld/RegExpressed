import {
  assertEquals,
  assert,
  assertFalse,
} from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { charset, notCharset } from "../mod.ts";

Deno.test("charset", () => {
  const regex = charset`go\\`;
  assertEquals(regex.source, "[go\\\\]");
  assert(regex.test("g"), "Group didn't match test string");
  assert(regex.test("o"), "Group didn't match test string");
  assert(regex.test("\\"), "Group matched test string, but shouldn't");
  assertFalse(regex.test("ae"), "Group matched test string, but shouldn't");
});

Deno.test("negated charset", () => {
  const regex = notCharset`go\\`;
  assertEquals(regex.source, "[^go\\\\]");
  assertFalse(regex.test("g"), "Group didn't match test string");
  assertFalse(regex.test("o"), "Group didn't match test string");
  assertFalse(regex.test("\\"), "Group matched test string, but shouldn't");
  assert(regex.test("ae"), "Group matched test string, but shouldn't");
});

Deno.test("charset unReserve", () => {
  const regex = charset`\\s`;
  assertEquals(regex.source, "[\\s]");
  assert(regex.test(" "), "Group didn't match test string");
  assertFalse(regex.test("ae"), "Group matched test string, but shouldn't");
});

Deno.test("charset reserved", () => {
  const regex = charset`\\`;
  assertEquals(regex.source, "[\\\\]");
  assert(regex.test("\\"), "Group didn't match test string");
  assertFalse(regex.test("ae"), "Group matched test string, but shouldn't");
});

Deno.test("charset reserved", () => {
  const regex = charset`\\`;
  assertEquals(regex.source, "[\\\\]");
  assert(regex.test("\\"), "Group didn't match test string");
  assertFalse(regex.test("ae"), "Group matched test string, but shouldn't");
});
