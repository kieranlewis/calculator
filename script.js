let currentNumber = 0;
let displayedNumber = 0;
let total = 0;
let currentOperation = '';

//calculator functions
function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a,b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a,b) {
    return parseInt(a) * parseInt(b);
}

function divide(a,b) {
    return parseInt(a) / parseInt(b);
}

function operate(a, b, operation) {
    switch (operation) {
        case '+': 
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    } 
}

//DOM Manipulation
const display = document.querySelector('#display');
const calcButtons = [...(document.querySelectorAll('button'))];
console.log(calcButtons);

calcButtons.forEach(button => button.addEventListener('click', buttonHelper));

function buttonHelper() {
    const displayArea = document.querySelector('#display p');
    switch (this.textContent) {
        case '+':
            currentOperation = '+';
            currentNumber = displayArea.innerHTML;
            //console.log(`Adding ${number} with ${displayedNumber}`);
            //total = add(number, displayedNumber);
            //console.log(`Total: ${total}`);
            //number = total;
            displayArea.innerHTML = '';
            break;
        case '-':
            currentOperation = '-';
            currentNumber = displayArea.innerHTML;
            console.log(`Subtracting ${number} with ${displayedNumber}`);
            total = subtract(number, displayedNumber);
            console.log(`Total: ${total}`);
            number = total;
            displayArea.innerHTML = '';
            break;
        case '*':
            break;
        case '/':
            break;
        case 'C':
            total = 0;
            currentNumber = 0;
            currentOperation = '';
            displayArea.innerHTML = '';
            break;
        case 'DEL':
            break;
        case '=':
            console.log(operate(displayedNumber, total, currentOperation));
            displayArea.innerHTML = operate(displayedNumber, total, currentOperation);
            break;
        default:
            displayArea.innerHTML += this.textContent;
            displayedNumber = displayArea.innerHTML;
    }
}
