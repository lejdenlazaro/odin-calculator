const DEFAULT_OPERAND = "0";

let operand;

function updateOperand(newOperand){
    operand = newOperand;
}

window.addEventListener("load",updateOperand(DEFAULT_OPERAND));