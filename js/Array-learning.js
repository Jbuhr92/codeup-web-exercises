"use strict";
// let fruits = ["bananas", "apples", "oranges", "mangoes", "tomatoes"];

// let var1 = fruits[2];
// console.log(var1);
//
// let numberOfFruits = fruits.length;
// console.log(`the number of fruits =>`, numberOfFruits);
//
// let fruitsString = fruits.toString()
// console.log(`using toString() on fruits =>`, fruitsString)
//

// for(let i = 1; i <= fruits.length; i++){
//     let fruit = fruits[i - 1];
//     console.log(fruit);
// }
//
// for(let i = 0; i <= fruits.length; i++){
//     let fruit = fruits[i];
//     console.log(fruit)
// }

// fruits.forEach((element,index, array) => {
//     console.log('the elements follows: ', element);
//     console.log('The index follows: ', index);
//     console.log('the array follows: ', array)
// })

let daysOfWeek = ['Monday', `Tuesday`, 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const thursday = daysOfWeek.indexOf('Thursday');

// console.log(thursday);

// const removeSunday = daysOfWeek.pop();
// const removeMonday = daysOfWeek.shift();
// const removeFirstHalfOfWeek = daysOfWeek.slice(0,3);
// console.log(removeMonday, daysOfWeek, removeFirstHalfOfWeek);

const indexOfThursday = daysOfWeek.indexOf('Thursday');
// const lastHalf = daysOfWeek.slice(indexOfThursday + 1);
// const firstHalf = daysOfWeek.slice(0, indexOfThursday);
// daysOfWeek = daysOfWeek.slice(0,indexOfThursday).join(',') + ',';
// daysOfWeek += lastHalf.join(',');
// daysOfWeek.split(",");
// console.log(daysOfWeek)

// Spread Operator

// daysOfWeek = [
//     ...firstHalf,
//     ...lastHalf,
//     "Merrelday"
// ]
// console.log(daysOfWeek)

//Splice Operator

daysOfWeek.splice(indexOfThursday, 1, 'Buhrday');
console.log(daysOfWeek.toString());