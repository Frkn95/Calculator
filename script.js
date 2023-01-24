const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const history = document.querySelector("history");

let userInput = "";
let firstNumber = "";
let secondNumber = "";
let action = "";

buttons.forEach(element => {
    element.addEventListener("click",(e) => {
        let val = e.target.innerText
        console.log(val)
    })
});

function add(num1, num2){
    return num1 + num2 
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator,numOne,numTwo){
    if(operator === "add"){
        return add(numOne,numTwo)
    }else if(operator === "subtract"){
        return subtract(numOne,numTwo)
    }else if (operator === "multiply"){
        return multiply(numOne,numTwo)
    }else if (operator === "divide"){
        return divide(numOne,numTwo)
    }
}

