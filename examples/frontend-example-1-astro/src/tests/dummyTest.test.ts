import { describe, test, expect } from 'vitest';

describe('Dummy Test Suite', () => {
  test('should pass a basic test', () => {
    expect(2 + 2).toBe(4);
  });

  test('should handle string comparison', () => {
    const greeting = 'Hello, World!';
    expect(greeting).toContain('Hello');
    expect(greeting.length).toBeGreaterThan(5);
  });

  test('should work with arrays', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toHaveLength(5);
    expect(numbers).toContain(3);
    expect(numbers[0]).toBe(1);
  });
});
