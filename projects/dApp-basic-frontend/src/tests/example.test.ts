import { describe, it, expect } from "vitest";

describe("Math operations", () => {
  it("should correctly add two numbers", () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  it("should correctly add negative numbers", () => {
    const result = -2 + -3;
    expect(result).toBe(-5);
  });

  it("should correctly add zero", () => {
    const result = 10 + 0;
    expect(result).toBe(10);
  });
});
