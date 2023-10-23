let display = document.getElementById('display');
let currentInput = '';
let currentEquation = '';

function appendToDisplay(value) {
    if (value === '=') {
        calculate();
    } else if (value === 'C') {
        clearDisplay();
    } else {
        currentInput += value;
        currentEquation += value;
        display.value = currentEquation;
    }
}

function clearDisplay() {
    currentInput = '';
    currentEquation = '';
    display.value = '';
}

function calculate() {
    if (currentInput === '') return;

    let result = eval(currentInput);
    currentInput = result.toString();
    currentEquation = currentInput;
    display.value = currentInput;
}
