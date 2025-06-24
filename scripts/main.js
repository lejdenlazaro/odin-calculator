const DEFAULT_OPERAND = "0";

let operand;

function updateOperand(newOperand){
    operand = newOperand;
}

function isValidOperand(operand){
    const isInteger = /(^0$)|(^-?[1-9]+\d*$)/;
    const isDecimal = /(^-?0\.\d*[1-9]+$)|(^-?[1-9]+\d*\.\d*[1-9]+$)/;
    return isInteger.test(operand) || isDecimal.test(operand);
}

const inputBtn = document.querySelectorAll("input");
const displayCurrent = document.querySelector(".display .current");

function execute(e){
    const value = e.target.value;
    if(isDigit(value) || value==="."){
        operand = (operand===DEFAULT_OPERAND)?(value==="."?operand+value:value):((!operand.includes(".") || isDigit(value))?operand+value:operand);
        const temp = operand;
        operand = isValidOperand(operand)?operand:temp;
        displayPrevious.textContent = operand;
    }
}

inputBtn.forEach(input=>input.addEventListener("click",execute));

window.addEventListener("load",updateOperand(DEFAULT_OPERAND));