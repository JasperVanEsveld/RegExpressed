import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { flag, regex } from "../mod.ts";

Deno.test("regex", () => {
  const pattern = regex`hello`;
  assertEquals(pattern.source, "hello");
});

Deno.test("regex flags", () => {
  const pattern = regex`hello`;
  const flagged = flag(pattern, {
    global: true,
    ignoreCase: true,
    multiline: true,
    unicode: true,
    sticky: true,
    dotall: true,
  });
  assertEquals(flagged.flags, "gimsuy");
});

Deno.test("regex match", () => {
  const pattern = regex`Hello World!`;
  assertEquals(pattern.exec("hello world!"), null);
  const match = pattern.exec("Hello World!, Hello World!");
  assertEquals([...match!], ["Hello World!"]);
  assertEquals(match?.index, 0);
  assertEquals(match?.input, "Hello World!, Hello World!");
});

Deno.test("regex matchall", () => {
  const pattern = flag(`Hello World!`, { global: true });
  assertEquals(pattern.exec("hello world!"), null);
  const matches = "Hello World!, Hello World!".matchAll(pattern);
  for (const match of matches) {
    assertEquals([...match!], ["Hello World!"]);
    assertEquals(match?.input, "Hello World!, Hello World!");
  }
});
