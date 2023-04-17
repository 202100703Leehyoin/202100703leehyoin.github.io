let expression = "";

function insert(value) {
  expression += value;
  document.querySelector(".screen").value = expression;
}

function clearScreen() {
  expression = "";
  document.querySelector(".screen").value = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  document.querySelector(".screen").value = expression;
}

function calculate() {
  let result = eval(expression);
  expression = result.toString();
  document.querySelector(".screen").value = result;
}
