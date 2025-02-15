import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
  it('should perform basic math correctly', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello';
    const name = 'World';
    expect(`${greeting} ${name}`).toBe('Hello World');
  });

  it('should work with arrays', () => {
    const numbers = [1, 2, 3];
    expect(numbers).toHaveLength(3);
    expect(numbers).toContain(2);
  });
}); 