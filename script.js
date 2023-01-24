const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const history = document.querySelector("history");
const decimalPoint = buttons[17]

let userInput = "";
let firstNumber = "";
let secondNumber = "";
let action = "";

buttons.forEach(element => {
    element.classList.add("button")
    element.addEventListener("click",(e) => {
        let val = e.target.innerText
        console.log(val)
    })
});

function add(num1, num2){
    const sum = num1 + num2
    return getRoundNumber(sum) 
}

function subtract(num1, num2){
    const difference =  num1 - num2
    return getRoundNumber(difference)
}

function multiply(num1, num2){
    const product = num1 * num2
    return getRoundNumber(product)
}

function divide(num1, num2){
    if(num2 === 0){
        return "Not Dividable"
    }
    const quotient = num1 / num2
    return getRoundNumber(quotient)
}

function power(num1,num2){
    const power =  Math.pow(num1,num2)
    return getRoundNumber(power)
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

function getRoundNumber(decNum){
    if(decNum.toString().indexOf(".")!==-1){
        if (decNum.toString().split(".")[1].length > 5){
            return decNum.toFixed(5)
        }
    }
    return decNum
}

function showHistory(givenVal){
    switch (givenVal) {
        case "plus":
            givenVal.textContent += "+ "
            break;
        case "minus":
            givenVal.textContent += "- "
            break;
        case "multiply":
            givenVal.textContent += "* "
            break;
        case "divide":
            givenVal.textContent += "÷ "
            break;
        case "power":
            givenVal.textContent += "^ "
        default:
            givenVal.textContent += `${givenVal}`
    }
}

function showInput(operator, val){
    switch (operator) {
        case "add":
            if(val !== "0" || userInput !== "0"){
                userInput += val
                input.textContent = userInput
            }
            break;
        case "all-clear":
            input.textContent = userInput
        case "clear":
            userInput = "";
            decimalPoint.removeAttribute("disabled")
            if(val === "full"){
                firstNumber = "";
                secondNumber = "";
                action="";
                history.textContent = "";
                input.textContent = userInput;
            }
            break
        default:
            break;
    }
}