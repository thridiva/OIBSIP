let display = document.getElementById("display");
let input = "";

function appendInput(value) {
  input += value;
  display.textContent = input;
}

function clearDisplay() {
  input = "";
  display.textContent = "0";
}

function calculateResult() {
  try {
    input = eval(input).toString();
    display.textContent = input;
  } catch (error) {
    display.textContent = "Error";
  }
}
