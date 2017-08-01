const { hangman } = require('../src/hangman')

describe('Hangman', () => {

  test('emoji', () => {
    const received = hangman('👹📲', '👹')
    const expected = '👹_'
    expect(received).toBe(expected)
  })

  test('hello', () => {
    const received = hangman('hello', 'el')
    const expected = '_ell_'
    expect(received).toBe(expected)
  })

  test('a short word with a single correct guess', () => {
    const received = hangman('the', 'e')
    const expected = '__e'
    expect(received).toBe(expected)
  })

  test('a short word with an incorrect guess', () => {
    const received = hangman('the', 'x')
    const expected = '___'
    expect(received).toBe(expected)
  })

  test('a short word with correct guesses', () => {
    const received = hangman('the', 'the')
    const expected = 'the'
    expect(received).toBe(expected)
  })

  test('a single letter a correct guess', () => {
    const received = hangman('a', 'a')
    const expected = 'a'
    expect(received).toBe(expected)
  })

  test('a single letter a wrong guess', () => {
    const received = hangman('a', 'e')
    const expected = '_'
    expect(received).toBe(expected)
  })

  test('a single letter with no guesses', () => {
    const received = hangman('a', '')
    const expected = '_'
    expect(received).toBe(expected)
  })

  test('a single letter', () => {
    const received = hangman('a', '')
    const expected = '_'
    expect(received).toBe(expected)
  })

  test('a multi-letter word', () => {
    const received = hangman('the', '')
    const expected = '___'
    expect(received).toBe(expected)
  })

  test('a long word', () => {
    const received = hangman('supercalifragilistic', '')
    const expected = '____________________'
    expect(received).toBe(expected)
  })
})
