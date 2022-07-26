export function* taggedValues<T>(
  strings: ReadonlyArray<string>,
  expressions: T[]
) {
  for (let i = 0; i < strings.length; i++) {
    yield strings[i];
    if (expressions.length > i) {
      yield expressions[i];
    }
  }
}

export function collect<T>(iterable: Iterable<T>): T[] {
  const result = [];
  for (const value of iterable) {
    result.push(value);
  }
  return result;
}
