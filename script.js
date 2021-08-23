let storedNumber = 0;
let displayedNumber = 0;
let storedOperation = '';

let total = 0;

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
            storedOperation = '+';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            //currentNumber = displayedNumber;
            //console.log(`Adding ${number} with ${displayedNumber}`);
            //total = add(number, displayedNumber);
            //console.log(`Total: ${total}`);
            //number = total;
            displayArea.innerHTML = '';
            break;
        case '-':
            storedOperation = '-';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            displayArea.innerHTML = '';
            break;
        case '*':
            storedOperation = '*';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            displayArea.innerHTML = '';
            break;
        case '/':
            storedOperation = '/';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            displayArea.innerHTML = '';
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
            console.log(`Operating on ${storedNumber} and ${displayedNumber} with ${storedOperation}`);
            total = operate(storedNumber, displayedNumber, storedOperation);
            console.log(`New total is ${total}`);
            displayedNumber = total;
            displayArea.innerHTML = displayedNumber;
            break;
        default:
            displayArea.innerHTML += this.textContent;
            displayedNumber = displayArea.innerHTML;
    }
}
