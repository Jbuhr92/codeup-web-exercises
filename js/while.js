"use strict";
console.log(`While loop`)

let i = 1
// while(i <= 65536) {
//     console.log(i)
//     i *= 2;
// }
let accumulator = 1
while(i <= 16){
    accumulator *= 2;
    console.log(accumulator)
    i++;
}


