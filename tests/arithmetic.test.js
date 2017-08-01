const { sum, subtract, multiply, divide, modulo, exponent, factorial, perfectNumber } = require("../src/arithmetic");

describe("Subtract can find the difference", () => {
  test("32 and 14", () => {
    expect(subtract(32, 14)).toBe(18);
  });

  test("5 and 4", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});
// ***********SUM/ADD****************

describe("Sum can add", () => {
  test("4 and 5", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("negative numbers", () => {
    expect(sum(-42, -32)).toBe(-74);
  });

  test("large numbers", () => {
    expect(sum(4096, 2048)).toBe(6144);
  });
});
// *************MULTIPLY****************

describe("Multiply can multiply 3 and 12", () => {
  test("3 and 12", () => {
    expect(multiply(3, 12)).toBe(36);
  });

  test("Negative number 2 and -4", () => {
    expect(multiply(2, -4)).toBe(-8);
  });
  test("Decimal numbers 1.2 and 5", () => {
    expect(multiply(1.2, 5)).toBe(6);
  });
});
// ****************DIVIDE*****************

describe("Divide can divide numbers", () => {
  test("divide 4 and 2", () => {
    expect(divide(4, 2)).toBe(2);
  });
  test("negative number -16 and -4", () => {
    expect(divide(-16, -4)).toBe(4);
  });
  test("fractional numbers", () => {
    expect(divide(6, 4)).toBe(1.5);
  });
});

// ******************MODULO*****************

describe("Modulo can find the remainder of division", () => {
  test("Modulo of 7 and 3", () => {
    expect(modulo(7, 3)).toBe(1);
  });
  test("Perfect modulo number no remainder 16 and 4", () => {
    expect(modulo(16, 4)).toBe(0);
  });
});

// ****************EXPONENT******************

describe("Exponent will multiply by power of b", () => {
  test("4 with exponent of 2", () => {
    expect(exponent(4, 2)).toBe(16);
  });
  test("12 with exponent of 2", () => {
    expect(exponent(12, 2)).toBe(144);
  });
  test("negative 5 with exponent 2", () => {
    expect(exponent(-5, 2)).toBe(25);
  });
});

// ****************FACTORIAL***************

describe("Factorial will multiply all numbers less than number", () => {
  test("4 factorial", () => {
    expect(factorial(4)).toBe(24);
  });
  test("negative number 4", () => {
    expect(factorial(-4)).toBe(24);
  });
  test("Odd negative -5 ", () => {
    expect(factorial(-5)).toBe(-120);
  });
});

// *****************PERFECT NUMBER*************
//
describe("Perfect number displayed true if they are false if not", () => {
  test("Is 6 a perfect number", () => {
    expect(perfectNumber(6)).toBe(true);
  });
  test("Is 33550336 a perfect number?", () => {
    expect(perfectNumber(33550336)).toBe(true);
  });
  test("Is 9 a perfect number", () => {
    expect(perfectNumber(9)).toBe(false);
  });
});
