import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import {
  oneOrMore,
  oneOrMoreLazy,
  optional,
  optionalLazy,
  quantity,
  quantityLazy,
  zeroOrMore,
  zeroOrMoreLazy,
} from "../mod.ts";

Deno.test("quantifiers", () => {
  const one = oneOrMore`hello`;
  const oneLaze = oneOrMoreLazy`hello`;
  const zero = zeroOrMore`hello`;
  const zeroLazy = zeroOrMoreLazy`hello`;
  const option = optional`hello`;
  const optionLazy = optionalLazy`hello`;
  const quant = quantity(0, 1)`hello`;
  const quantOrMore = quantity(0)`hello`;
  const quantLazy = quantityLazy(0, 1)`hello`;
  const quantOrMoreLazy = quantityLazy(0)`hello`;
  assertEquals(one.source, "(?:hello)+");
  assertEquals(oneLaze.source, "(?:hello)+?");
  assertEquals(zero.source, "(?:hello)*");
  assertEquals(zeroLazy.source, "(?:hello)*?");
  assertEquals(option.source, "(?:hello)?");
  assertEquals(optionLazy.source, "(?:hello)??");
  assertEquals(quant.source, "(?:hello){0,1}");
  assertEquals(quantLazy.source, "(?:hello){0,1}?");
  assertEquals(quantOrMore.source, "(?:hello){0,}");
  assertEquals(quantOrMoreLazy.source, "(?:hello){0,}?");
});
