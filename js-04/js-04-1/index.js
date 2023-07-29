function Temperature(C) {
    const F = (C * 9/5) + 32
    return F
}

const C = +prompt("Enter temperature in celsius");

console.log(Temperature(C))