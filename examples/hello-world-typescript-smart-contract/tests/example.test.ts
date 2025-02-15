import { describe, it, expect } from "vitest";

describe("Basic Math Test", function () {
  it("Should add two numbers correctly", function () {
    const a = 5;
    const b = 3;
    const sum = a + b;
    expect(sum).to.equal(8);
  });

  it("Should add zero correctly", function () {
    const a = 10;
    const b = 0;
    const sum = a + b;
    expect(sum).to.equal(10);
  });
});
