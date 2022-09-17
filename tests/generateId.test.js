import { generateId } from "../src/utils";

describe("generateId", () => {
  const f = generateId;
  test("returns number", () => {
    const id = f();
    expect(typeof id).toBe("number");
  });
  test("not returns NaN", () => {
    const id = f();
    expect(id).not.toBeNaN();
  });
  test("returns unique value (100 tries)", () => {
    const results = Array.from({ length: 100 }, (v, index) => f());
    const resultsUniqueSet = new Set(results);
    const isUnique = results.length === resultsUniqueSet.size;
    expect(isUnique).toBe(true);
  });
  test("default length to be 9", () => {
    const result = f();
    expect(result).toBeLessThan(1000000000);
  });
  test("returns value of specified length", () => {
    const result = f(7);
    expect(result).toBeLessThan(10000000);
  });
});
