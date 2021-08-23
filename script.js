let storedNumber = 0;
let displayedNumber = 0;
let storedOperation = '';

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
