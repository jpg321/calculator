
let firstNumber = '';
let secondNumber = '';
let operator = '';
let secondOperator = '';
let total = 0;


const numberButtons = document.querySelectorAll("#number");
const display = document.querySelector("#display");
const operands = document.querySelectorAll("#operand")
const equals = document.querySelector("#equals");

numberButtons.forEach((button) =>
button.addEventListener("click", ()=> displayNumber(button.innerText)))

equals.addEventListener("click", operate);

function displayNumber(number)
{
    console.log(number)
    if(number == 'C')
    {
        display.innerText = ''
        firstNumber = "";
        secondNumber = "";
        total = 0;
        operator = '';
        console.log(firstNumber)
        console.log(secondNumber)
    }
    else if(firstNumber == "" && operator == "-")
    {
        firstNumber = "-";
        operator = "";
        firstNumber += number
        display.innerText += number
        
    }
    else if(!operator && !total){
        firstNumber += number
        display.innerText += number
        console.log(firstNumber)
    }
    else 
    {
        secondNumber += number
        display.innerText = secondNumber
    }


}

operands.forEach((operand) =>
    operand.addEventListener("click", ()=> displayOperand(operand.innerText)))

function displayOperand(operation)
{   
    if(operation == "-" && operator == "-")
    {
        secondNumber = "-"
        
    }
    else if(operator)
    {
        operate();
    }
    else {
    // number = "";
    operator = operation;
    display.innerText = operator;
    }

}

function reset()
{
    firstNumber = total;
    secondNumber = "";
    operator = "";
}

function operate(){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    console.log(firstNumber)
    console.log(secondNumber)
    switch (operator)
    { 
        case "+":
            total = firstNumber + secondNumber;
            display.innerText = total;
            reset();
            break;

        case "-":
            total = firstNumber - secondNumber;
            display.innerText = total;
            firstNumber = total;
            secondNumber = "";
            operator = "";
            break;
        case "*":
            total = firstNumber * secondNumber;
            display.innerText = total;
            firstNumber = total;
            secondNumber = "";
            operator = "";
            break;
        case "/":
            if(secondNumber == 0)
            {
                display.innerText = "Cant divide by 0"
                break;
            }
            else
            {
                total = firstNumber/secondNumber
                console.log("a")
                console.log(total)
                display.innerText = total;
                firstNumber = total;
                secondNumber = "";
                operator = "";
                break;
            }
    }

}
