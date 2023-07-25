function Avg(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {

    const average = (num1 + num2 + num3 + num4 + num5)/5
  
    if (average < 12) {
      return "The average is less than 12.";
    } else {
      return average;
    }
  }

const num1 = +prompt("Enter number 1");
const num2 = +prompt("Enter number 2");
const num3 = +prompt("Enter number 3");
const num4 = +prompt("Enter number 4");
const num5 = +prompt("Enter number 5");

console.log(Avg(num1, num2, num3, num4, num5));
