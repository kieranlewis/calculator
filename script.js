//calculator functions
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
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
const calcButtons = [...(document.querySelectorAll('#button-grid button'))];
console.log(calcButtons);

calcButtons.forEach(button => button.addEventListener('click', buttonHelper));

function buttonHelper() {
    const displayArea = document.querySelector('#display p');
    switch (this.textContent) {
        case '+':
            break;
        case '-':
            break;
        case '*':
            break;
        case '/':
            break;
        case 'C':
            break;
        case 'DEL':
            break;
        case '=':
            break;
        default:
            displayArea.innerHTML += this.textContent;
    }
}