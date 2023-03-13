let calculatorScreen = document.querySelector(".display input");

function addValueToScreen(value) {
  calculatorScreen.value += value;
}

function clearScreen() {
  calculatorScreen.value = "";
}

function deleteLastCharacter() {
  calculatorScreen.value = calculatorScreen.value.slice(0, -1);
}

function calculateResult() {
  let result = eval(calculatorScreen.value);
  calculatorScreen.value = result;
}

document.querySelectorAll(".calculator input[type='button']").forEach(function (button) {
  button.addEventListener("click", function () {
    let buttonValue = this.value;
    switch (buttonValue) {
      case "AC":
        clearScreen();
        break;
      case "DE":
        deleteLastCharacter();
        break;
      case "=":
        calculateResult();
        break;
      default:
        addValueToScreen(buttonValue);
        break;
    }
  });
});
