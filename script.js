const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('#btn-clr');
const deleteButton = document.querySelector('#btn-del');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

let currentOperand = '';
let previousOperand = '';
let currentOperation = undefined;
let equalsFlag = false;

function add(a,b) {
    return Math.round((parseFloat(a) + parseFloat(b)) * 1000) / 1000;
}

function subtract(a,b) {
    return Math.round((parseFloat(a) - parseFloat(b)) * 1000) / 1000;
}

function multiply(a,b) {
    return Math.round((parseFloat(a) * parseFloat(b)) * 1000) / 1000;
}

function divide(a,b) {
    if(b == 0) return 'ERROR';
    return Math.round((parseFloat(a) / parseFloat(b)) * 1000) / 1000;
}

function operate(a, b, operation) {
    if(operation === undefined) return 'ERROR';
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

function appendNumber(number) {
    if(equalsFlag) {
        return;
    }
    currentOperandTextElement.innerText = currentOperand.toString() + number.toString();
    currentOperand = currentOperandTextElement.innerText;
}

function clear() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = undefined;
    currentOperandTextElement.innerText = '';
    equalsFlag = false;
}

function chooseOperation(operation) {
    if(currentOperand === '') return;
    if(previousOperand !== '') {
        currentOperand = operate(previousOperand, currentOperand, currentOperation);
    }
    currentOperation = operation;
    previousOperand = currentOperand;
    currentOperandTextElement.innerText = currentOperand;
    currentOperand = '';
    equalsFlag = false;
}

function backspace() {
    currentOperandTextElement.innerText = currentOperandTextElement.innerText.slice(0, -1);
    currentOperand = currentOperandTextElement.innerText;
}

function equals() {
    currentOperand = operate(previousOperand, currentOperand, currentOperation);
    currentOperandTextElement.innerText = currentOperand;
    previousOperand = '';
    equalsFlag = true;
}

function keyboardHelper(e) {
    console.log(e.key);
    switch (e.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            appendNumber(e.key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            chooseOperation(e.key);
            break;
        case '=':
        case 'Enter':
            equals();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'c':
            clear();
            break;
        default:
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
    });
})

clearButton.addEventListener('click', clear);

equalsButton.addEventListener('click', equals);

deleteButton.addEventListener('click', backspace);

document.addEventListener('keydown', keyboardHelper);
