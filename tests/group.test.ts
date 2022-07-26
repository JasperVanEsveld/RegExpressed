import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { group, groupReference, namedGroup, nonCaptureGroup } from "../mod.ts";

Deno.test("group", () => {
  const regex = group`hello`;
  assertEquals(regex.source, "(hello)");
});

Deno.test("group escape", () => {
  const regex = group`he*o`;
  assertEquals(regex.source, "(he\\*o)");
  assert(regex.test("he*o"), "Group didn't match test string");
});

Deno.test("group named", () => {
  const regex = namedGroup("test")`hello`;
  assertEquals(regex.source, "(?<test>hello)");
  assert(regex.test("hello"), "Group didn't match test string");
});

Deno.test("group non capture", () => {
  const regex = nonCaptureGroup`hello`;
  assertEquals(regex.source, "(?:hello)");
  assert(regex.test("hello"), "Group didn't match test string");
});

Deno.test("group reference", () => {
  const regex = groupReference(0);
  assertEquals(regex.source, "\\0");
});
