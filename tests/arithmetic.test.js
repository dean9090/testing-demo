const { sum, subtract } = require('../src/arithmetic')

describe('Subtract can find the difference', () => {
  test('32 and 14', () => {
    expect(subtract(32, 14)).toBe(18)
  })

  test('5 and 4', () => {
    expect(subtract(5, 4)).toBe(1)
  })
})

describe('Sum can add', () => {
  test('4 and 5', () => {
    expect(sum(4, 5)).toBe(9)
  })

  test('negative numbers', () => {
    expect(sum(-42, -32)).toBe(-74)
  })

  test('large numbers', () => {
    expect(sum(4096, 2048)).toBe(6144)
  })
})
