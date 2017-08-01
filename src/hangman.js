const PLACEHOLDER = '_'

const hangman = (word, guesses) => {
  return word.split('').map((letter) => {
    return guesses.includes(letter) ? letter : PLACEHOLDER
  }).join('')
}

module.exports = { hangman }
