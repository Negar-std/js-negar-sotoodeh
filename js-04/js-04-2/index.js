function findWord(string , word) {
    return string.toLowerCase().includes(word.toLowerCase()) ? "word found" : "Eror!";
}


const string = prompt("Enter string");
const word = prompt("Enter word");

console.log(findWord(string, word));