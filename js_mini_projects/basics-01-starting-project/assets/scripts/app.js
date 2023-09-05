let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, enteredNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
}
function addNumberToLog(logEntry) {
  logEntries.push(logEntry);
  console.log(logEntries);
}
function logEntryObject(operation, prevResult, currentResult, enteredNumber) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    currentResult: currentResult,
    enteredNumber: enteredNumber,
  };
  addNumberToLog(logEntry);
}
function calculate(calcOperation) {
  const enteredNumber = getUserInput();
  if (
    (calcOperation !== "ADD" &&
      calcOperation !== "SUBTRACT" &&
      calcOperation !== "MULTIPLY" &&
      calcOperation !== "DIVISION") ||
    !enteredNumber
  ){
    return;
  }
  if (calcOperation === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calcOperation === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (calcOperation === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else if (calcOperation === "DIVISION") {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }
  const intitalNumber = currentResult;
  createAndWriteOutput(mathOperator, intitalNumber, enteredNumber);
  logEntryObject(calcOperation, intitalNumber, currentResult, enteredNumber);
}
function add() {
  calculate("ADD");
}
function subtract() {
  calculate("SUBTRACT");
}
function multiply() {
  calculate("MULTIPLY");
}
function divide() {
  calculate("DIVISION");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
//let currentDescription = `${defaultResult} + 10`;
