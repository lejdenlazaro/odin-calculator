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

window.addEventListener("load",updateOperand(DEFAULT_OPERAND));