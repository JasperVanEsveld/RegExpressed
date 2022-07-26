import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { lookahead, lookbehind, notLookahead, notLookbehind } from "../mod.ts";

Deno.test("check all looks", () => {
  const ahead = lookahead`hello`;
  const notAhead = notLookahead`hello`;
  const behind = lookbehind`hello`;
  const notBehind = notLookbehind`hello`;
  assertEquals(ahead.source, "(?=hello)");
  assertEquals(notAhead.source, "(?!hello)");
  assertEquals(behind.source, "(?<=hello)");
  assertEquals(notBehind.source, "(?<!hello)");
});
