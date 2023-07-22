const firsttNumber = +prompt("Enter the first number");
const operator = prompt("Operator");
const secondtNumber = +prompt("Enter the second number");

if (isNaN(firsttNumber) || isNaN(secondtNumber)){
    console.log("Eror please enter a number!")
}

if(operator!=="+" && operator!=="-" && operator!=="*" && operator!=="/"){
    console.log("unvalid operator")
}

if (operator === "+"){
    console.log(firsttNumber + secondtNumber)
}

if (operator === "-"){
    console.log(firsttNumber - secondtNumber)
}

if (operator === "*"){
    console.log(firsttNumber * secondtNumber)
}

if (operator === "/"){
    console.log(firsttNumber / secondtNumber)
}