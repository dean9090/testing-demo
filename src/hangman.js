const PLACEHOLDER = '_'

//              'hello'  'el'
//                 |      |
const hangman = (word, guesses) =>
  word                                                               // 'hello'
    .split('')                                                       // ['h', 'e', 'l', 'l', 'o']
    .map(letter => guesses.includes(letter) ? letter : PLACEHOLDER)  // ['_', 'e', 'l', 'l', '_']
    .join('')                                                        // '_ell_'

module.exports = { hangman }
