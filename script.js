const DISPLAY = document.getElementById("display");
const ROUNDING_FACTOR = 10 ** 6;
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
  if (b === 0) {
    window.alert(
      "What are you doing BOZO? You know you can't divide by 0 right?"
    );
    return "";
  }
  return a / b;
}

function operate(operation, firstNum, secondNum) {
  if (firstNum === null || secondNum === null) {
    return "error: invalid number entered";
  }
  let result;

  numA = null;
  numB = null;
  func = null;

  switch (operation) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      break;
    case "x":
      result = multiply(firstNum, secondNum);
      break;
    case "/":
      result = divide(firstNum, secondNum);
      break;
    default:
      result = "error: invalid operator entered";
  }

  result = Math.round(result * ROUNDING_FACTOR) / ROUNDING_FACTOR;
  return result;
}

function setupDigitBtns() {
  document.querySelectorAll(".digit").forEach((digitBtn) => {
    digitBtn.addEventListener("click", (event) => {
      DISPLAY.textContent += digitBtn.textContent;
    });
  });
}

function setupOperatorBtns() {
  document.querySelectorAll(".operator").forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (event) => {
      let clickedOperator = event.target.textContent;

      if (func && numA !== null) {
        let numStart = DISPLAY.textContent.indexOf(func) + 1;
        let numString = DISPLAY.textContent.slice(numStart);

        if (numString) {
          numB = Number(numString);
          let result = operate(func, numA, numB);

          //If an expression is evaluated using +, -, x, or / store the 
          if (clickedOperator !== "=" && result) {
            numA = Number(result);
            func = clickedOperator;
            result += clickedOperator;
          }

          DISPLAY.textContent = result;
        }
      }
    });
  });

  document.querySelectorAll(".function").forEach((functionBtn) => {
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

function setupDecimalBtn() {
  document.getElementById("decimal-btn").addEventListener("click", (event) => {
    if (!func && !DISPLAY.textContent.includes(".")) {
      DISPLAY.textContent += ".";
    }

    let operandIndex = DISPLAY.textContent.indexOf(func);
    if (func && !DISPLAY.textContent.includes(".", operandIndex)) {
      DISPLAY.textContent += ".";
    }
  });
}

function setupClearBtn() {
  document.getElementById("clear-btn").addEventListener("click", (event) => {
    numA = null;
    numB = null;
    func = null;

    DISPLAY.textContent = "";
  });
}

function setupCalculatorBtns() {
  setupDigitBtns();
  setupOperatorBtns();
  setupDecimalBtn();
  setupClearBtn();
}

setupCalculatorBtns();
