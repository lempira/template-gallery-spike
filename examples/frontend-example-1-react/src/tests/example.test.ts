import { describe, it, expect } from 'vitest'

describe('Example Test Suite', () => {
  it('should add two numbers correctly', () => {
    const result = 2 + 2
    expect(result).toBe(4)
  })

  it('should concatenate strings', () => {
    const str1 = 'Hello'
    const str2 = 'World'
    expect(`${str1} ${str2}`).toBe('Hello World')
  })

  it('should handle array operations', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr).toContain(2)
  })
})
