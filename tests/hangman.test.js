const { hangman } = require('../src/hangman')

describe('Hangman', () => {

  test('a single letter', () => {
    expect(hangman('a')).toBe('_')
  })

  test('a multi-letter word', () => {
    expect(hangman('the')).toBe('___')
  })
})
