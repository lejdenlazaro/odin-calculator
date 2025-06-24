const DEFAULT_OPERAND = "0";
const DEFAULT_OPERATOR = "=";

let operand;
let operator;

function updateOperand(newOperand){
    operand = newOperand;
}

function updateOperator(newOperator){
    operator = newOperator;
}

function setDefault(){
    updateOperand(DEFAULT_OPERAND);
    updateOperator(DEFAULT_OPERATOR);
}

function isDigit(value){
    return value>="0" && value<="9";
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
        displayCurrent.textContent = operand;
    }
}

inputBtn.forEach(input=>input.addEventListener("click",execute));

window.addEventListener("load",setDefault);