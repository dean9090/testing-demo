const PLACEHOLDER = '_'

const hangman = (word, guesses) => {
  let output = ''
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (guesses.includes(letter)) {
      output += letter
    } else {
      output += PLACEHOLDER
    }
  }
  return output
  // if (word === guesses) {
  //   return word
  // } else {
  //   return '_'.repeat(word.length)
  // }
}

module.exports = { hangman }
