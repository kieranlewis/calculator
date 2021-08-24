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
    if(b == 0) return 'ERROR'
    return parseInt(a) / parseInt(b);
}

function operate(a, b, operation) {
    console.log(`${a} ${operation} ${b} = `);
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

function logNumbers() {
    console.log(`Stored Number is ${storedNumber}`);
    console.log(`Displayed Number is ${displayedNumber}`);
    console.log(`Stored Operation is ${storedOperation}`);
    console.log(`Total is ${total}`);
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
            document.getElementById('btn-plus').classList.add('active');
            storedOperation = '+';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            break;
        case '-':
            document.getElementById('btn-sub').classList.add('active');
            storedOperation = '-';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            break;
        case '*':
            document.getElementById('btn-mult').classList.add('active');
            storedOperation = '*';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            break;
        case '/':
            document.getElementById('btn-div').classList.add('active');
            storedOperation = '/';
            storedNumber = displayedNumber;
            console.log(`Stored number is ${storedNumber} and stored operation is ${storedOperation}`);
            break;
        case 'C':
            total = 0;
            currentNumber = 0;
            currentOperation = '';
            displayArea.innerHTML = '';
            break;
        case 'DEL':
            displayArea.innerHTML = displayArea.innerHTML.slice(0, -1);
            break;
        case '=':
            clearActive();
            console.log(`Operating on ${storedNumber} and ${displayedNumber} with ${storedOperation}`);
            displayedNumber = operate(storedNumber, displayedNumber, storedOperation);
            displayArea.innerHTML = displayedNumber;
            break;
        default:
            if(document.getElementsByClassName('active').length != 0) {
                clearActive();
                displayArea.innerHTML = this.textContent;
                displayedNumber = displayArea.innerHTML;        
            } else {
                displayArea.innerHTML += this.textContent;
                displayedNumber = displayArea.innerHTML;  
            }        
    }
}

function clearActive() {
    calcButtons.forEach(button => {
        button.classList.remove('active');
    });
}
