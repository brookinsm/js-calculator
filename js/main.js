

// VARIABLES
const calcDisplay = document.getElementById("calcDisplay");
const calcButtons = document.getElementById("frame");
let userInput = "";
let userOperation = null;
let result = null;

// FUNCTION - Update Display from User Input
function updateCalc() {
  calcDisplay.textContent = userInput;
}

// EVENT LISTENER - User Inputs & Calc Display Update
calcButtons.addEventListener("click", (event) => {
  const target = event.target;

  // Number Buttons
  if (target.classList.contains("number-button")) {
    userInput += target.textContent;
    updateCalc();
  }

  // Operation Buttons
  else if (target.classList.contains("operation-button")) {
    userOperation = target.textContent;
    result = parseFloat(userInput);
    userInput = "";
  }

  // Equals Button with switch operations
  else if (target.classList.contains("equals-button")) {
    if (result && userOperation !== null && userInput !== "") {
      switch (userOperation) {
        case "+":
          result += parseFloat(userInput);
          break;
        case "-":
          result -= parseFloat(userInput);
          break;
        case "*":
          result *= parseFloat(userInput);
          break;
        case "/":
          result /= parseFloat(userInput);
          break;
      }

      calcDisplay.textContent = result;
      userInput = "";
      userOperation = null;
      result = null;
    }
  }

  // Reset Button
  else if (target.classList.contains("reset-button")) {
    userInput = "";
    userOperation = null;
    result = null;
    updateCalc();
  }
});