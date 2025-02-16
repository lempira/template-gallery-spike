import { describe, test, expect } from "vitest";
describe("Basic Math Operations", () => {
  test("addition works correctly", () => {
    expect(2 + 2).toBe(4);
    expect(0 + 0).toBe(0);
    expect(-1 + 1).toBe(0);
  });

  test("multiplication works correctly", () => {
    expect(3 * 4).toBe(12);
    expect(0 * 5).toBe(0);
    expect(-2 * 3).toBe(-6);
  });

  test("division works correctly", () => {
    expect(10 / 2).toBe(5);
    expect(0 / 5).toBe(0);
    expect(15 / 3).toBe(5);
  });

  test("subtraction works correctly", () => {
    expect(5 - 3).toBe(2);
    expect(0 - 0).toBe(0);
    expect(10 - 15).toBe(-5);
  });
});
