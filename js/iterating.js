(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['John', 'Connor', 'Matthew', 'David'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    for(let i = 0; i < names.length; i++){
    let name = names[i];
    // console.log(name)
}

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(let i = 0; i < names.length; i++) {
        let name = names[i];
        // console.log(name)
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
let allNames = [];
        names.forEach((element,) => {
            // console.log('the elements follows: ', element);
            let name = element;
            allNames.push(element)
        })
// console.log(allNames)
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let numbers = ['1', '2', '3', '4', '5'];

    const first = (array) =>
    {
        return array[0]
    }
    // console.log(first(numbers))

    const returnSecond = (array) =>{
        return array[1]
    }
        // console.log(returnSecond(numbers))

    const returnLast = (array) => {
        let arrayLength = array.length
        return array[arrayLength - 1]
    }
    // console.log(returnLast(numbers))
})();