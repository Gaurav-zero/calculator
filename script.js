let a="0";
let b="0";
let operator;

let digits= document.querySelectorAll(".digit")
let displayText= document.querySelector(".display h1");


function add(a,b){return a+b};
function subtract(a,b){return a-b};
function multiply(a,b){return a*b};
function divide(a,b){return a/b};
function operate(operator, a, b){
    switch (operator){
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}
function storeDigit(value){
    b= b+value;
}

function updateDisplay(value){
    displayText.textContent= value;
}

let btns= document.querySelectorAll(".digit");
btns.forEach((btn) =>{
    btn.addEventListener("click", (e)=>{
        storeDigit(e.target.textContent);
        updateDisplay(b);
    });
});

