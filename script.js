const DIGIT_BTNS = document.querySelectorAll(".digit");
const OPERATOR_BTNS = document.querySelectorAll(".operator");
const EVAL_BTN = document.getElementById("eval-btn");
const DISPLAY = document.getElementById("display");
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

function setupCalculator() {
  DIGIT_BTNS.forEach((digitBtn) => {
    digitBtn.addEventListener("click", (event) => {
      console.log(digitBtn.textContent);
      DISPLAY.textContent += digitBtn.textContent;
    });
  });
  
  OPERATOR_BTNS.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", event => {
      console.log(operatorBtn.textContent);
      DISPLAY.textContent += operatorBtn.textContent;
    });
  });

  EVAL_BTN.addEventListener("click", event => {
    console.log(DISPLAY.textContent);
  })
}

setupCalculator();
