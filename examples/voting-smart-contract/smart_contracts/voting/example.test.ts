import { describe, it, expect } from "vitest";

describe("Basic Math Operations", function () {
  describe("Addition", function () {
    it("should add two positive numbers correctly", function () {
      expect(2 + 2).to.equal(4);
    });

    it("should handle zero in addition", function () {
      expect(0 + 5).to.equal(5);
    });
  });

  describe("Multiplication", function () {
    it("should multiply two numbers correctly", function () {
      expect(3 * 4).to.equal(12);
    });

    it("should handle multiplication by zero", function () {
      expect(5 * 0).to.equal(0);
    });
  });

  describe("Array operations", function () {
    it("should sum an array of numbers", function () {
      const numbers = [1, 2, 3, 4, 5];
      const sum = numbers.reduce((a, b) => a + b, 0);
      expect(sum).to.equal(15);
    });
  });
});
