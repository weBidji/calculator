let displayValue = '';
const buttons = document.querySelectorAll('.normal');
const clearBtn = document.getElementById('c');
const allClearBtn = document.getElementById('ac');
const resultBtn = document.getElementById('equals');
const display = document.getElementById('display');
const maxLength = 19;


buttons.forEach(button => {
    button.addEventListener('click', updateDisplay)
})

function updateDisplay(e) {
    let pressedButton = e.target;
    const buttonValue = pressedButton.getAttribute('data-value').toString();

    if (firstOperand){
        display.textContent = '';
        displayValue = '';
        displayValue += buttonValue;
        display.textContent = displayValue;

    }
    else {
    displayValue += buttonValue;
    display.textContent = displayValue;
}

    // console.log(displayValue);
}



//calculations 

let firstOperand;
let secondOperand;
let currentOperator;
let operatorButtons = document.querySelectorAll('.operator');
let equalsBtn = document.getElementById('equals');


equalsBtn.addEventListener('click', calculate);

operatorButtons.forEach(button => {

    button.addEventListener('click', handleOperators)
})


function handleOperators(e) {
    let clickedOperator = e.target.textContent;

    if (currentOperator) {
 
        calculate();
    } else {
       
     
            firstOperand = parseFloat(displayValue);
           

        currentOperator = clickedOperator;
        // displayValue = '';
        // display.textContent = displayValue;
       
        // console.log(firstOperand);
    }
}


//calculate

let result;

function calculate(){
    
    secondOperand = parseFloat(displayValue)
    
    switch (currentOperator) {
        case '+':
            displayValue = firstOperand + secondOperand;
            result = displayValue;
            break;
        case '-':
            displayValue = firstOperand - secondOperand;
            result = displayValue;
            break;
        case '*':  
            displayValue = firstOperand * secondOperand;
            result = displayValue;
            break;
        case '/':
            displayValue = firstOperand / secondOperand;
            result = displayValue;
            break;
        case '%': displayValue = firstOperand % secondOperand;
            result = displayValue;
            break;
        default:
            console.error('Invalid operator');
            return;
    }
    

    display.textContent = displayValue;

    firstOperand = result;
    secondOperand = null;
    currentOperator = null;
    


}

clearBtn.addEventListener('click', clear);

function clear(){
display.textContent = '';
firstOperand = null;
secondOperand = null;
currentOperator = null;

}






  //   if (displayValue.length + buttonValue.length <= maxLength) {
    //     displayValue += buttonValue;
    // } else {
    //     console.log('Maximum length reached.');
        
    //     displayValue = displayValue.substring(0, maxLength);
    // }