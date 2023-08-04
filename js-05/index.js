const arr = []

const addToArr = () => {
    const newArr = {
        Number: Math.random(),
        Date: new Date(),
        get Word() {
            var words = ["Rock", "Paper", "Scissor"];
            var randomWord = words[Math.floor(Math.random() * words.length)];
            return randomWord;
        },
    }
    arr.push(newArr)
}

addToArr();
addToArr();

console.log(arr);
