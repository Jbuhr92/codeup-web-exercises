"use strict";

console.log("For_loop")

const showMultiplicationTable = (input) => {
    let table = '';
    for(let i = 1; i <= 10; i++){
        let daMath = parseFloat(input) * i;
        let output = `${input} X ${i} = ${daMath}\n`;
        table += output
    }
    return table


}
let sevenTable = showMultiplicationTable(7)
console.log(sevenTable)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:

for (let i = 1; i <= 10; i++){
    let genNumber = randomNumber(20, 200)
    if (genNumber % 2 === 0){
        console.log(`${genNumber} is even`)
    } else {
        console.log(`${genNumber} is odd`)
    }
}


const buildPyramid = (rows) => {

for(let i = 1; i <= rows; i++ ) {
    console.log(`${i}`.repeat(i));
}
}

// Loop 9 times
for(let i = 0; i < 9; i++){
    let output = `${i+1}`;
    //loop again with I as my declaration. condition is >=0. decrement
    for(let j = i; j > 0; j--){
        let moNumbers = `${i+1}`;
        output += moNumbers
    }
    console.log(output)
}

for(let i = 100; i > 0; i-= 5){
    console.log(i)
}