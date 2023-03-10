/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// let streetNumber = prompt("Please enter your street number.");
// let streetName = prompt('Please enter your street name.');
//
// const userAddress = {
//     userNumber: streetNumber,
//     userName: streetName,
//     inputAddress: function (){
//        return `Your address is ` + this.userNumber + ' ' + this.userName
//     }
//
// }
//
// console.log(userAddress.inputAddress())


/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */
const nums = [1, 2, 3, 4, 5];
function minMax (numbers)  {
    // setting variables to hold the largest and smallest numbers
    let minNumber = numbers[0];
    let largest = numbers[0];
    // Looping through the array input in order to find the numbers
    for (let i = 0; i < numbers.length; i++){
        // If statement to find the largest number
        if (largest < numbers[i]){
            largest = numbers[i]
        }
        // If statement to find the smallest number
        if (minNumber > numbers[i]){
            minNumber = numbers[i]
        }
    }
    //returning the output
    return [minNumber, largest];
}

console.log(minMax(nums))



/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */