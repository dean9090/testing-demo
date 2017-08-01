const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const modulo = (a, b) => a % b;

// **********EXPONENET************
const exponent = function exponent(a, b) {
  if (a === 0) {
    return 1;
  } else {
    return a ** b;
  }
};
// ************FACTORIAL************
function factorial(num) {
  if (num < 0) {
    return num * factorial(num + 1);
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
// ***********PERFECT NUMBER**********
function perfectNumber(num) {
  let sum = 0;
  for (var i = 1; i <= num; i++) {
    let digit = i;
    if (num % digit === 0) {
      sum += digit;
    }
  }
  if (sum / 2 === num) {
    return true;
  } else {
    return false;
  }
}

module.exports = { sum, subtract, multiply, divide, modulo, exponent, factorial, perfectNumber };
