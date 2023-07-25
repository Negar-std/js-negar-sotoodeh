function caculator(a = 0, o , b = 0){
    if(!isNaN(a + b)){
        switch (o) {
            case '+':
                return (a + b);
            case '-':
                return (a - b);
            case '*':
                return (a * b);
            case '/':
                return (a / b);
            default:
                return ("Eror!")
        }
    }

}

const firsttNumber = +prompt("Enter the first number");
const operator = prompt("Operator");
const secondtNumber = +prompt("Enter the second number");

console.log(caculator(firsttNumber, operator, secondtNumber));