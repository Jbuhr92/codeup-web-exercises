"use strict";

// let i = 1
// while (i <= 10){
//     if (i % 2 === 0) {
//         console.log(`loop #${i} is even!`)
//     } else {
//         console.log(`loop #${i} is odd!`)
//     }
//     ++i
// }
//
// do {
//     console.log(`loop #${i}`);
//     i++
// } while(false)


// for (/*initialization*/let i = 1;/*condition*/ i <= 10;/*increment*/ i++) {
//     if (i % 2 === 0) {
//         console.log(`loop #${i} is even!`)
//     } else {
//         console.log(`loop #${i} is odd!`)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


// const getFactorial = (num) => {
//     let result = num
//     for (let i = (num - 1); i > 0; i--){
//         result *= i;
//         console.log(result)
//     }
//     // console.log(result)
//     return result;
// }
// getFactorial(5)

// const buildPyramid = (rows) => {
//
// for(let i = 1; i <= rows; i++ ){
//     // loop through the rows
//     let row = "";
//     for (let j = 1; j <= rows - i; j++){
//         // loop to add spaces
//         row += "  "
//     }
//     for (let k = 1; k <= 2 * i - 1 ; k++){
//         //Loop to add the asterisks
//         row += "* "
//     }
//     console.log(row)
// }
// }
//
// buildPyramid(5)