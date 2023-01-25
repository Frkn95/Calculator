const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");
const history = document.getElementById("history");
const decimalPoint = buttons[17]

let userInput = "";
let firstNumber = "";
let secondNumber = "";
let action = "";

buttons.forEach(element => {
    element.classList.add("button")
    element.addEventListener("click",(e) => {
        buttonHandler(element)
        buttons.forEach((btn)=> btn.blur())
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
    showInput("all-clear",0);
    if(operator === "plus"){
        showInput("add", add(+numOne, +numTwo))
    }else if(operator === "minus"){
        showInput("add", subtract(+numOne,+numTwo))
    }else if (operator === "multiply"){
        showInput("add", multiply(+numOne,+numTwo))
    }else if (operator === "divide"){
        showInput("add", divide(+numOne,+numTwo))
    }else if (operator === "power"){
        showInput("add", power(+numOne,+numTwo))
    }
    firstNumber="";
    secondNumber="";
    action="";
}

function getRoundNumber(decNum){
    if(decNum.toString().indexOf(".")!==-1){
        if (decNum.toString().split(".")[1].length > 5){
            return decNum.toFixed(5)
        }
    }
    return decNum
}

function showHistory(toHistory){
    if (toHistory === 'plus') {
        history.textContent += '+ ';
      } else if (toHistory === 'minus') {
        history.textContent += '- ';
      } else if (toHistory === 'multiply') {
        history.textContent += '× ';
      } else if (toHistory === 'divide') {
        history.textContent += '÷ ';
      } else if (toHistory === 'power') {
        history.textContent += '^ ';
      } else {
        history.textContent += `${toHistory} `;
      }
}

function showInput(operator, val){
    if(operator === "add"){
        if(val !== "0" || userInput !== "0"){
            userInput+= val
            input.textContent=userInput
        }
    }else if(operator === "clear"){
        input.textContent = userInput
    }else if(operator ==="all-clear"){
        userInput = "";
            decimalPoint.removeAttribute("disabled")
            if(val === "full"){
                firstNumber = "";
                secondNumber = "";
                action="";
                history.textContent = "";
                input.textContent = userInput;
            }
    }
}

function buttonHandler(btn){
    if(btn.classList.contains("number")){
        showInput("add", btn.textContent)
    }else if(btn.classList.contains("decimal")){
        showInput("add",btn.textContent)
    }else if(btn.classList.contains("operator")){
        if(firstNumber === "" && secondNumber === "" && action === "" && userInput !=="" &&userInput !== "."){
            firstNumber = userInput
            action = btn.id
            showHistory(firstNumber);
            showHistory(action,"operator")
            showInput("all-clear",0)
        }else if (userInput !== '' && firstNumber !== '' && action !== '' && userInput !== '.') {
            secondNumber = userInput;
            showHistory(secondNumber);
            operate(action, firstNumber, secondNumber);
            action = btn.id;
            showHistory(action, 'operator');
            firstNumber = userInput;
            showInput('all-clear', 0);
          } else if (userInput === '' && firstNumber !== '' && action === '' && userInput !== '.') {
            showHistory(firstNumber);
            action = btn.id;
            showHistory(action, 'operator');
            secondNumber = userInput;
            showInput('all-clear', 0);
          } else if (userInput !== '' && firstNumber !== '' && action === '' && userInput !== '.') {
            firstNumber = userInput;
            action = btn.id;
            showHistory(firstNumber);
            showHistory(action, 'operator');
            showInput('all-clear', 0);
          }
        }else if (btn.classList.contains('equal')) {
          if (userInput !== '' && firstNumber !== '' && userInput !== '.') {
            secondNumber = userInput;
            showHistory(secondNumber);
            showHistory('=');
            operate(action, firstNumber, secondNumber);
          }
        }else if (btn.classList.contains('clear')) {
          showInput('clear', 0);
        } else if (btn.classList.contains('all-clear')) {
          showInput('all-clear', 'full');
        }
    
}

