const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearBtn = document.getElementById("clear");
const backBtn = document.getElementById("backspace");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const equalBtn = document.getElementById("equal");
const squareBtn = document.getElementById("square");
const rootBtn = document.getElementById("root");

let lastOperation = "";
let memory = 0;

buttons.addEventListener("click", inputNumber);

function inputNumber(event) {
  console.log("clicked");
  if (display.textContent.length > 15) {
    return;
  }

  let data = event.target.dataset.input;

  if (data) {
    if (data === ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += data;
      }
    } else {
      display.textContent += data;
      if (!display.textContent.includes(".")) {
        display.textContent = Number(display.textContent);
      }
    }
  }
}

clearBtn.addEventListener("click", () => {
  display.textContent = 0;
  lastOperation = "";
  memory = 0;
});

minusBtn.addEventListener("click", () => {
  lastOperation = "minus";
  memory = Number(display.textContent);
  display.textContent = 0;
});

plusBtn.addEventListener("click", () => {
  lastOperation = "plus";
  memory = Number(display.textContent);
  display.textContent = 0;
});

divideBtn.addEventListener("click", () => {
  lastOperation = "divide";
  memory = Number(display.textContent);
  display.textContent = 0;
});

multiplyBtn.addEventListener("click", () => {
  lastOperation = "multiply";
  memory = Number(display.textContent);
  display.textContent = 0;
});

equalBtn.addEventListener("click", () => {
  if (lastOperation !== "") {
    let number = Number(display.textContent);
    if (lastOperation === "minus") {
      display.textContent = memory - number;
    } else if (lastOperation === "plus") {
      display.textContent = memory + number;
    } else if (lastOperation === "divide") {
      display.textContent = memory / number;
    } else if (lastOperation === "multiply") {
      display.textContent = memory * number;
    }
    lastOperation = "";
  }
});

backBtn.addEventListener("click", () => {
  if (display.textContent.length === 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  }
});

squareBtn.addEventListener("click", () => {
  display.textContent **= 2;
  lastOperation = "";
});

rootBtn.addEventListener("click", () => {
  display.textContent = Math.sqrt(display.textContent);
  lastOperation = "";
});
