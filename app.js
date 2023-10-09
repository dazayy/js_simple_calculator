const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result-value");
const calc = document.getElementById("calculate");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const ERROR_DIVIDE_ZERO = "На ноль делить нельзя";
const ERROR_INPUT = "Числа не были введены";
let action = "+";

plus.onclick = () => {
    action = "+";
}

minus.onclick = () => {
    action = "-";
}

divide.onclick = () => {
    action = "/";
}

multiply.onclick = () => {
    action = "*";
}

calc.onclick = function() {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = computeNumbers(num1, num2, action)
        setColor(sum);
        result.textContent = sum;
    }
    else {
        result.textContent = ERROR_INPUT;
    }

}

function computeNumbers(num1, num2, actionSymbol) {
    let result;

    switch (actionSymbol) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 != 0) {
                result = num1 / num2;
                break;
            }
            else {
                result = ERROR_DIVIDE_ZERO;
                break;
            }
    }
    return result;
}

function setColor(sum) {
    if (sum < 0) {
        result.style.color = "red";
    }
    else {
        result.style.color = "green";
    }
}

