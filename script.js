let a=null;
let b=null;
let operator=null;

let btns= document.querySelectorAll(".digit")
let displayText= document.querySelector(".display h1");
let chosenOperator= document.querySelectorAll(".operators");
let equal= document.querySelector("#equal");
let cancel= document.querySelector("#cancel");


function add(a,b){return Number(a)+Number(b)};
function subtract(a,b){return Number(a)-Number(b)};
function multiply(a,b){return Number(a)*Number(b)};
function divide(a,b){return Number(a)/Number(b)};
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
    if(b== null) b=value;
    else b= b+value;
}

function updateDisplay(value){
    displayText.textContent= value;
}


btns.forEach((btn) =>{
    btn.addEventListener("click", (e)=>{
        storeDigit(e.target.textContent);
        updateDisplay(b);
    });
});


chosenOperator.forEach((optr) =>{
    optr.addEventListener("click", (e)=>{
        
        if(a == null){
            a=b;
            b= null;
        }
        else{
            let result= Math.round(operate(operator, a, b) * 10000) / 10000;
            b=null;
            a=String(result);
            updateDisplay(a);
        }
        operator= e.target.textContent;
    });
});


equal.addEventListener("click", (e) =>{
    if(a != null && b != null){
        let result= Math.round(operate(operator,a,b) * 10000) / 10000;
        updateDisplay(String(result));
        a=null;
        b=null;
    }
});

cancel.addEventListener("click", (e) =>{
    a=null;
    b=null;
    operator=null;
    updateDisplay(0);
});

