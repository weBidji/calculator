const buttons = document.querySelectorAll('.normal');
const allClearBtn = document.getElementById('ac');
const clearBtn = document.getElementById('c');
const resultBtn = document.getElementById('equals');
const displayText = document.getElementById('display');
let currentExpression = '';


function displayUpdate(event) {
    let pressedButton = event.target;
    let pressedChar = pressedButton.textContent;
    const lastChar = displayText.innerText.slice(-1);
    const restrictedChars = ['+', '-', 'x', '/', '%', '.'];


    if (restrictedChars.includes(lastChar) && restrictedChars.includes(pressedChar)) {

        console.log('Invalid input: ' + pressedChar);
    } else {
        displayText.innerText += pressedChar;
        updateFontSize();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', displayUpdate);
});
clearBtn.addEventListener('click', clear);

function clear() {
    displayText.innerText = '';
}

resultBtn.addEventListener('click', calculate);

function calculate(expression) {
    expression = display.textContent;
    expression = expression.replace(/x/g, '*');
    let result = eval(expression);
    display.textContent = result;
    updateFontSize()
}

function updateFontSize() {
    if (displayText.textContent.length > 11) {
        displayText.style.fontSize = '2.5rem';
    } else {
        displayText.style.fontSize = ''; // Reset to default size
    }
}