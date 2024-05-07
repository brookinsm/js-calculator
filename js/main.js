// // VARIABLES
// const calcDisplay = document.getElementById("calc-display");
// const calcButtons = document.getElementById("frame");
// let userInput = "";
// let userOperation = null;
// let result = null;

// // FUNCTION - Update Display from User Input
// function updateCalc() {
//   calcDisplay.textContent = userInput;
// }

// // EVENT LISTENER - User Inputs & Calc Display Update
// calcButtons.addEventListener("click", (event) => {
//   const target = event.target;

//   // Number Buttons
//   if (target.classList.contains("number-button")) {
//     userInput += target.textContent;
//     updateCalc();
//   }

//   // Operation Buttons
//   else if (target.classList.contains("operation-button")) {
//     userOperation = target.textContent;
//     result = parseFloat(userInput);
//     userInput = "";
//   }

//   // Equals Button with switch operations
//   else if (target.classList.contains("equals-button")) {
//     if (result && userOperation !== null && userInput !== "") {
//       switch (userOperation) {
//         case "+":
//           result += parseFloat(userInput);
//           break;
//         case "-":
//           result -= parseFloat(userInput);
//           break;
//         case "*":
//           result *= parseFloat(userInput);
//           break;
//         case "/":
//           result /= parseFloat(userInput);
//           break;
//       }

//       calcDisplay.textContent = result;
//       userInput = "";
//       userOperation = null;
//       result = null;
//     }
//   }

//   // Reset Button
//   else if (target.classList.contains("reset-button")) {
//     userInput = "";
//     userOperation = null;
//     result = null;
//     updateCalc();
//   }
// });


// // EVENT LISTENER - Keyboard Input
// document.addEventListener("keydown", (event) => {
//     const key = event.key;
//     const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "=", "Enter", "Backspace"];
    
//     if (allowedKeys.includes(key)) {
//       event.preventDefault();
      
//       if (key === "Enter" || key === "=") {
//         const equalsButton = document.querySelector(".equals-button");
//         equalsButton.click();
//       } else if (key === "Backspace") {
//         userInput = userInput.slice(0, -1);
//         updateCalc();
//       } else {
//         userInput += key;
//         updateCalc();
//       }
//     }
//   });

// VARIABLES
const calcDisplay = document.getElementById("calc-display");
const calcButtons = document.getElementById("frame");
let firstChoice = "";
let userOperation = null;
let result = null;
let secondChoice = "";
// FUNCTION - Update Display from User Input
// function updateCalc() {
//   calcDisplay.innerText = firstChoice;
// }
function updateCalc(value) {
    calcDisplay.innerText = value;
}

// EVENT LISTENER - User Inputs & Calc Display Update
calcButtons.addEventListener("click", (evt) => {
  const target = evt.target;
  // Number Buttons
  // if you have a first choice and you have an operator then we should be setting second choice
  
  if (firstChoice && userOperation && target.classList.contains("number-button")) {
    console.log('choosing second number');
    secondChoice += target.innerText;
    updateCalc(secondChoice);
  }  else if (target.classList.contains("operation-button")) {
        console.log('choosing operator');
        userOperation = target.innerText;
        switch (userOperation) {
                    case "+":
                      result += parseFloat(secondChoice);
                      break;
                    case "-":
                      result -= parseFloat(secondChoice);
                      break;
                    case "*":
                      result *= parseFloat(secondChoice);
                      break;
                    case "/":
                      result /= parseFloat(secondChoice);
                      break;
                  }
                  calcDisplay.innerText = result;
                  firstChoice = "";
                  userOperation = null;
                  result = null;
  } else if (target.classList.contains("number-button")){
    console.log('selecting the first number');
    firstChoice += target.innerText;
    result = firstChoice;
    updateCalc(firstChoice);
  }



//   if (target.classList.contains("number-button")) {
//     firstChoice += target.innerText;
//     updateCalc(firstChoice);
//   }
//   // Operation Buttons
//   {
//     userOperation = target.innerText;
//     //result = parseFloat(userInput);
//     userInput = "";
//   }
//   // Equals Button with switch operations
//   else if (target.classList.contains("equals-button")) {
//     if (result && userOperation !== null && userInput !== "") {
//       switch (userOperation) {
//         case "+":
//           result += parseFloat(userInput);
//           break;
//         case "-":
//           result -= parseFloat(userInput);
//           break;
//         case "*":
//           result *= parseFloat(userInput);
//           break;
//         case "/":
//           result /= parseFloat(userInput);
//           break;
//       }
//       calcDisplay.innerText = result;
//       userInput = "";
//       userOperation = null;
//       //result = null;
//     }
//   }
//   // Reset Button
//   else if (target.classList.contains("reset-button")) {
//     userInput = "";
//     userOperation = null;
//     result = null;
//     updateCalc();
//   }
});