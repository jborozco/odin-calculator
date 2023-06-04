
// define keys
const b0 = document.querySelector('#b0');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const b5 = document.querySelector('#b5');
const b6 = document.querySelector('#b6');
const b7 = document.querySelector('#b7');
const b8 = document.querySelector('#b8');
const b9 = document.querySelector('#b9');
const bPlus = document.querySelector('#bPlus');
const bMinus = document.querySelector('#bMinus');
const bMultiply = document.querySelector('#bMultiply');
const bDivide = document.querySelector('#bDivide');
const bEqual = document.querySelector('#bEqual');
const bDelete = document.querySelector('#bDelete');
const bOnOff = document.querySelector('#bOnOff');
const bComa = document.querySelector('#bComa');
const bReset = document.querySelector('#bReset');

// define screen fields
const lastNumber = document.querySelector('#lastNumber');
const currentNumber = document.querySelector('#currentNumber');
const operator = document.querySelector('#operator');

let operatorValue = "";
operator.innerHTML = operatorValue;

//Set up initial values
let currentNumberValue = "";
currentNumber.innerHTML = "";

let lastNumberValue = "";
lastNumber.innerHTML = "";



let numberKeys = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bComa, bMinus];
let operatorKeys = [bPlus, bMinus, bMultiply, bDivide]



// Functions for the calculator keys 
addToCurrentNumber = function (button) {
    if (
        (button.title === "-" && currentNumberValue === "") ||
        (button.title !== "-") || //Allow negative value to be set
        (currentNumberValue.includes('.') === false && currentNumberValue !== "")//Allow decimal value to be set
    ) {
        console.log(currentNumberValue.includes('.'))
        currentNumberValue = currentNumberValue + button.title;
        currentNumber.innerHTML = currentNumberValue;
    }

}

deleteLastDigit = function () {
    currentNumberValue = currentNumberValue.slice(0, -1);
    currentNumber.innerHTML = currentNumberValue;
}

resetCalculator = function () {
    currentNumberValue = "";
    lastNumberValue = "";
    currentNumber.innerHTML = currentNumberValue;
    lastNumber.innerHTML = lastNumberValue;
}

logOperator = function (button) {
    operatorValue = button.title;
    operator.innerHTML = operatorValue;
}


operate = function (button) {


    if (lastNumberValue === "") { // log last 
        lastNumberValue = currentNumberValue;
        currentNumberValue = "";


    }
    else if (operatorValue === "+") {
        lastNumberValue = +lastNumberValue + +currentNumberValue;
        currentNumberValue = "";
    }

    else if (operatorValue === "-") {
        lastNumberValue = +lastNumberValue - +currentNumberValue;
        currentNumberValue = "";
    }


    else if (operatorValue === "÷") {
        lastNumberValue = +lastNumberValue / +currentNumberValue;
        currentNumberValue = "";
    }

    else if (operatorValue === "×") {
        lastNumberValue = +lastNumberValue * +currentNumberValue;
        currentNumberValue = "";
    }
    //log operator value for next operation
    logOperator(button);

    //push current to last
    //show the sign
    //reset current

    operator.innerHTML = button.title;
    currentNumber.innerHTML = currentNumberValue;
    lastNumber.innerHTML = lastNumberValue;

}



// Call functions on keys

numberKeys.forEach(numberKey => {
    numberKey.onclick = function () { addToCurrentNumber(numberKey) }
});

operatorKeys.forEach(operatorKey => {
    operatorKey.onclick = function () { operate(operatorKey) }
});


bDelete.onclick = function () { deleteLastDigit() }
bReset.onclick = function () { resetCalculator() }

















// On selection of an operator > log first string as a int and apply the operator
// Log second input a string
// On equal or other operator show result and push current input 


//need to commit pseudocode