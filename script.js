
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

// define screen fields
const lastNumber = document.querySelector('#lastNumber');
const currentNumber = document.querySelector('#currentNumber');
const operator = document.querySelector('#operator');


//Log first input a string
let currentNumberValue = "";


currentNumber.innerHTML = "-";


b0.onclick = function () { inputCurrentNumber(b0) }

inputCurrentNumber = function (button) {

    currentNumberValue = currentNumberValue + button.title;
    currentNumber.innerHTML = currentNumberValue;
    console.log(button)
}















// On selection of an operator > log first string as a int and apply the operator
// Log second input a string
// On equal or other operator show result and push current input 


//need to commit pseudocode