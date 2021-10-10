const click = document.querySelector(`.buttonsection`);
const display = document.querySelector(`.display`);
const historyBox = document.querySelector(`.history`);
const buttonAdd = document.querySelector(`.add`);
const buttonSubtract = document.querySelector(`.subtract`);
const buttonMultiply = document.querySelector(`.multiply`);
const buttonDivide = document.querySelector(`.divide`);
const buttonEqual = document.querySelector(`.equal`);

let firstValue = 0;
let secondValue = 0;
let history = 0;
let displayValue = 0;
let addition = 0;
let subtraction = 0;
let multiply = 0;
let divide = 0;
let decimal = 0;

click.addEventListener(`click`, function (event) {
  selector(event.target.value);
});

function selector(value) {
  if (value >= 0 && value <= 9) {
    firstValue += value;
    displayValue = parseFloat(firstValue);
    display.textContent = displayValue;
    console.log(firstValue);
  }
  if (value == `c`) {
    firstValue = 0;
    secondValue = 0;
    displayValue = 0;
    addition = 0;
    subtraction = 0;
    multiply = 0;
    divide = 0;
    history = 0;
    decimal = 0;
    addButtonFunction();
    historyBox.textContent = history;
    display.textContent = displayValue;
  }
  if (value == `-`) {
    addButtonFunction();
    buttonSubtract.classList.add("buttonOff");
    history = displayValue + ` - `;
    historyBox.textContent = history;
    secondValue = parseFloat(firstValue);
    displayValue = 0;
    firstValue = 0;
    subtraction = 1;
    multiply = 0;
    divide = 0;
    addition = 0;
    display.textContent = displayValue;
  }
  if (value == `+`) {
    addButtonFunction();
    buttonAdd.classList.add("buttonOff");
    history = displayValue + ` + `;
    historyBox.textContent = history;
    secondValue = parseFloat(firstValue);
    displayValue = 0;
    firstValue = 0;
    subtraction = 0;
    multiply = 0;
    divide = 0;
    addition = 1;
    display.textContent = displayValue;
  }
  if (value == `/`) {
    addButtonFunction();
    buttonDivide.classList.add("buttonOff");
    history = displayValue + ` \xF7 `;
    historyBox.textContent = history;
    secondValue = parseFloat(firstValue);
    displayValue = 0;
    firstValue = 0;
    subtraction = 0;
    multiply = 0;
    divide = 1;
    addition = 0;
    display.textContent = displayValue;
    secondValue += firstValue;
    firstValue = 0;
  }
  if (value == `x`) {
    addButtonFunction();
    buttonMultiply.classList.add("buttonOff");
    history = displayValue + ` * `;
    historyBox.textContent = history;
    secondValue = parseFloat(firstValue);
    displayValue = 0;
    firstValue = 0;
    subtraction = 0;
    multiply = 1;
    divide = 0;
    addition = 0;
    display.textContent = displayValue;
    secondValue += firstValue;
    firstValue = 0;
  }
  if (value == `=`) {
    if (addition === 1) {
      history = history + firstValue + ` = `;
      firstValue = parseFloat(firstValue);
      firstValue += secondValue;
      displayValue = firstValue;
      display.textContent = displayValue;
      history += displayValue;
      historyBox.textContent = history;
      secondValue = 0;
      addition = 0;
      console.log(displayValue);
      addButtonFunction();
    }
    if (subtraction === 1) {
      history = history + firstValue + ` = `;
      firstValue = parseFloat(firstValue);
      firstValue = secondValue - firstValue;
      displayValue = firstValue;
      display.textContent = displayValue;
      history += displayValue;
      historyBox.textContent = history;
      secondValue = 0;
      subtraction = 0;
      console.log(displayValue);
      addButtonFunction();
    }
    if (multiply === 1) {
      history = history + firstValue + ` = `;
      firstValue = parseFloat(firstValue);
      firstValue *= secondValue;
      displayValue = firstValue;
      display.textContent = displayValue;
      history += displayValue;
      historyBox.textContent = history;
      secondValue = 0;
      multiply = 0;
      console.log(displayValue);
      addButtonFunction();
    }
    if (divide === 1) {
      if (firstValue == 0) {
        firstValue = secondValue;
        history = history + firstValue + ` = `;
        firstValue = secondValue / firstValue;
        displayValue = firstValue;
        display.textContent = displayValue;
        history += displayValue;
        historyBox.textContent = history;
        secondValue = 0;
        divide = 0;
        console.log(displayValue);
        addButtonFunction();
      } else {
        history = history + firstValue + ` = `;
        firstValue = parseFloat(firstValue);
        firstValue = secondValue / firstValue;
        displayValue = firstValue;
        display.textContent = displayValue;
        history += displayValue;
        historyBox.textContent = history;
        secondValue = 0;
        divide = 0;
        console.log(displayValue);
        addButtonFunction();
      }
    } else {
      displayValue = firstValue;
      display.textContent = displayValue;
      history = displayValue;
      historyBox.textContent = history;
      secondValue = 0;
      console.log(displayValue);
      addButtonFunction();
    }
  }
  if (value == `backspace`) {
    if (displayValue !== 0) {
      firstValue += ``;
      firstValue = firstValue.substring(0, firstValue.length - 1);
      displayValue = firstValue;
      display.textContent = displayValue;
      console.log(firstValue);
    }
    console.log(displayValue);
  }
  if (value == `.`) {
    displayValue += ``;
    console.log();
    if (displayValue.includes(`.`) == true) {
      decimal = 1;
    }
    if (decimal == 0) {
      firstValue = displayValue + `.`;
      displayValue = firstValue;
      display.textContent = displayValue;
    }
  }
  if (displayValue == ``) {
    displayValue = 0;
    display.textContent = displayValue;
  }
  decimal = 0;
}

function removeButtonFunction() {
  buttonAdd.classList.add("buttonOff");
  buttonSubtract.classList.add("buttonOff");
  buttonDivide.classList.add("buttonOff");
  buttonMultiply.classList.add("buttonOff");
}

function addButtonFunction() {
  buttonAdd.classList.remove("buttonOff");
  buttonAdd.classList.add("button.add");
  buttonSubtract.classList.remove("buttonOff");
  buttonSubtract.classList.add("button.subtract");
  buttonDivide.classList.remove("buttonOff");
  buttonDivide.classList.add("button.divide");
  buttonMultiply.classList.remove("buttonOff");
  buttonMultiply.classList.add("button.multiply");
}
