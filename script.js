const DIGIT_BTNS = document.querySelectorAll(".digit");
const FUNCTION_BTNS = document.querySelectorAll(".function");
const EVAL_BTN = document.getElementById("eval-btn");
const DISPLAY = document.getElementById("display");
let numA;
let numB;
let func;

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

function operate(operation, firstNum, secondNum) {
  if (!firstNum || !secondNum) {
    return "error: invalid number entered";
  }

  numA = null;
  numB = null;
  func = null;

  switch (operation) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "x":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
    default:
      return "error: invalid operator entered";
  }
}

function setupCalculator() {
  DIGIT_BTNS.forEach((digitBtn) => {
    digitBtn.addEventListener("click", (event) => {
      DISPLAY.textContent += digitBtn.textContent;
    });
  });

  document.querySelectorAll(".operator").forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (event) => {
      let clickedOperator = event.target.textContent;

      if (func && numA) {
        let numStart = DISPLAY.textContent.indexOf(func) + 1;
        numB = Number(DISPLAY.textContent.slice(numStart));
        let result = operate(func, numA, numB);

        if (clickedOperator !== "=") {
          numA = Number(result);
          func = clickedOperator;
          result += clickedOperator;
        }

        DISPLAY.textContent = result;
        return result;
      }
    });
  });

  FUNCTION_BTNS.forEach((functionBtn) => {
    functionBtn.addEventListener("click", (event) => {
      let clickedFunc = event.target.textContent;

      if (DISPLAY.textContent && !func) {
        numA = Number(DISPLAY.textContent);
        func = clickedFunc;
        DISPLAY.textContent += clickedFunc;
      }
    });
  });
}

setupCalculator();
