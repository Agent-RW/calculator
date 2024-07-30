let numA;
let numB;
let operator;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, numA, numB) {
  if (!numA || !numB) {
    return "error: invalid number entered";
  }

  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      return "error: invalid operator entered";
  }
}
