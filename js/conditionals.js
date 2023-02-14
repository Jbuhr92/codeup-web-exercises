"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];

// const analyzeColor = randomColor => {
//     if (randomColor === "red"){
//         return "Red is the color of apples!";
//     } else if (randomColor === "orange") {
//         return "Orange is the color of pumpkins!";
//     } else if (randomColor === "yellow") {
//         return "Yellow is the color of lemons";
//     } else if (randomColor === "green"){
//         return "Green is the color of the grass!";
//     }    else if (randomColor === "blue"){
//         return "Blue is the color of the sky!";
//     } else if (randomColor === "indigo"){
//         return `Indigo is the color of blueberries!!`;
//     } else if (randomColor === "violet"){
//         return `Violet is the color of grapes!`
//     } else {
//         return `I know nothing about that color!`
//     }




/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// switch(randomColor.toLowerCase()) {
//     case "red":
//          alert("Red is the color of apples!");
//         break;
//     case "orange":
//         alert("Orange is the color of pumpkins!");
//         break;
//     case "yellow":
//         alert("Yellow is the color of lemons");
//         break;
//     case "green":
//         alert("Green is the color of the grass!");
//         break;
//     case "blue":
//         alert("Blue is the color of the sky!");
//         break;
//     case "indigo":
//         alert(`Indigo is the color of blueberries!!`);
//         break;
//         case "violet":
//             alert(`Violet is the color of grapes!`);
//         break;
//     default:
//         alert("I don't know anything about that color :(");
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// const analyzeColor = prompt(`What is your favorite color?`)
// switch(analyzeColor.toLowerCase()) {
//     case "red":
//         alert("Red is the color of apples!");
//         break;
//     case "orange":
//         alert("Orange is the color of pumpkins!");
//         break;
//     case "yellow":
//         alert("Yellow is the color of lemons");
//         break;
//     case "green":
//         alert("Green is the color of the grass!");
//         break;
//     case "blue":
//         alert("Blue is the color of the sky!");
//         break;
//     case "indigo":
//         alert(`Indigo is the color of blueberries!!`);
//         break;
//     case "violet":
//         alert(`Violet is the color of grapes!`);
//         break;
//     default:
//         alert("I don't know anything about that color :(");
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let luckyNumber = Math.floor(Math.random() * 6);
let totalAmount = 100;
const calculateTotal = (luckyNumber, totalAmount) => {
    if (luckyNumber === 0){
        return `Sorry you did not win a discount this time! Your total is still ${formatToLocaleString(totalAmount)}`
    } else if (luckyNumber === 1){
        let calculate = totalAmount - (totalAmount * .1)
        return `You won a discount! your total discount amount is 10% Your new total is ${formatToLocaleString(calculate)}`
    } else if (luckyNumber === 2){
        let calculate = totalAmount - (totalAmount * .25)
        return `You won a discount! your total discount amount is 25% Your new total is ${formatToLocaleString(calculate)}`
    } else if (luckyNumber === 3){
        let calculate = totalAmount - (totalAmount * .35)
        return `You won a discount! your total discount amount is 35% Your new total is ${formatToLocaleString(calculate)}`
    } else if (luckyNumber === 4){
        let calculate = totalAmount - (totalAmount * .5)
        return `You won a discount! your total discount amount is 50% Your new total is ${formatToLocaleString(calculate)}`
    } else if (luckyNumber === 5){
        let calculate = 0
        return `You won a discount! your total discount amount is 100% Your new total is ${formatToLocaleString(calculate)}`
    }

}

console.log(calculateTotal(luckyNumber, totalAmount))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
// let totalAmount = parseFloat(prompt(`What is the amount of your bill?`))
// alert(calculateTotal(luckyNumber, totalAmount))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let userInput = confirm(`Would you like to enter a number?`)
// const calculateUser = (userInput) => {
//     if (userInput === false) {
//         let userOutput = `Have a wonderful day!`
//         return userOutput;
//     } else {
//         let userNumber = parseFloat(prompt(`Please enter a number`));
//         if (typeof userNumber === "string" || isNaN(userNumber) !== false) {
//                return `That is not a number!`
//         } else {
//             let userNumberAdd = `${userNumber} + 100 = ${userNumber + 100}`
//             let posOrNeg = userNumber >= 0
//             let evenOrOdd = userNumber % 2
//             const userPosOrNeg = (posOrNeg) => {
//                 if (posOrNeg !== true) {
//                     let userNumberNeg = `${userNumber} is negative!`
//                     return userNumberNeg
//                 } else {
//                     let userNumberPos = `${userNumber} is positive!`
//                     return userNumberPos
//                 }
//             }
//                     const numberOddOrEven = (evenOrOdd) =>{
//                     if (evenOrOdd !== 0) {
//                 let userNumberOdd = `The number you entered is odd!`
//                         return userNumberOdd
//                     } else {
//
//                 let userNumberEven = `The number you entered is even`
//                         return userNumberEven
//             }
//                     }
//          let message = `The number you entered is ${userNumber}, ${userNumberAdd}, ${userPosOrNeg(posOrNeg)} ${numberOddOrEven(evenOrOdd)}`;
//          return message
//         }
//     }
// }
//          alert(calculateUser(userInput))