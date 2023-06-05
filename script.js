
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
const bPosNeg = document.querySelector('#bPosNeg');

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

let result = "";


let numberKeys = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bComa, bMinus];
let operatorKeys = [bPlus, bMinus, bMultiply, bDivide]



// Functions for the calculator keys 
addToCurrentNumber = function (button) {
    if (operatorValue === "=") {
        resetCalculator();
        currentNumberValue = button.title;
        currentNumber.innerHTML = currentNumberValue;
    }
    else if ((button.title === ".") &&
        (currentNumberValue.includes('.') === true)) {        //if there is already a coma, do nothing

    }
    else if (button.title === "-" && currentNumberValue.includes('-')) //Allow negative value to be set
    {
    }
    else {
        currentNumberValue = currentNumberValue + button.title;
        currentNumber.innerHTML = currentNumberValue;
    }

}

ChangeValueSign = function () {
    if (currentNumberValue === "") {
        currentNumberValue = "-";
    }
    else if (currentNumberValue === "-") {
        currentNumberValue = "";
    }
    else {
        currentNumberValue = `${-currentNumberValue}`;
    }
    currentNumber.innerHTML = currentNumberValue;

}


deleteLastDigit = function () {
    currentNumberValue = currentNumberValue.slice(0, -1);
    currentNumber.innerHTML = currentNumberValue;
}

resetCalculator = function () {
    currentNumberValue = "";
    lastNumberValue = "";
    operatorValue = "";
    result = "";
    showResult();
}

logOperator = function (button) {
    if (lastNumberValue != 0) {
        operatorValue = button.title;
        console.log(typeof currentNumberValue);
        operator.innerHTML = operatorValue;
    }
}

showResult = function () {
    operator.innerHTML = operatorValue;
    currentNumber.innerHTML = currentNumberValue;
    lastNumber.innerHTML = lastNumberValue;
}

calculate = function () {
    if (result === "") { // log last 
        result = currentNumberValue;
    }
    else if (operatorValue === "+") {
        result = parseFloat(lastNumberValue) + parseFloat(currentNumberValue);
    }
    else if (operatorValue === "-") {
        result = parseFloat(lastNumberValue) - parseFloat(currentNumberValue);
    }
    else if (operatorValue === "÷") {
        result = parseFloat(lastNumberValue) / parseFloat(currentNumberValue);
    }
    else if (operatorValue === "×") {
        result = parseFloat(lastNumberValue) * parseFloat(currentNumberValue);
    }

}

operate = function (button) {
    calculate();
    lastNumberValue = result;
    currentNumberValue = "";
    showResult();
    logOperator(button);    //log operator value for next operation

}

equal = function () {
    if (operatorValue === "=" || operatorValue === "") {
        resetCalculator();
    }
    else {
        calculate();
        currentNumberValue = result;
        lastNumberValue = "";
        operatorValue = "=";
        showResult();
    }
}





// Call functions on keys

numberKeys.forEach(numberKey => {
    numberKey.onclick = function () { addToCurrentNumber(numberKey) }
});

operatorKeys.forEach(operatorKey => {
    operatorKey.onclick = function () { operate(operatorKey) }
});


bDelete.onclick = function () { deleteLastDigit() }
bEqual.onclick = function () { equal() }
bPosNeg.onclick = function () { ChangeValueSign() }

















// On selection of an operator > log first string as a int and apply the operator
// Log second input a string
// On equal or other operator show result and push current input 


//need to commit pseudocode