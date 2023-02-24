(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "John",
        lastName: "Buhr",
        sayHello: function (){
            return "Hello " + this.firstName + " " + this.lastName
        }
    }
    // console.log(person.firstName)
    // console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

// console.log(person.sayHello())


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // Your program will have to
    // display a line with the name of the person, the amount before the
    // discount, the discount, if any, and the amount after the discount.

 // for (let i = 0; i < shoppers.length; i++){
 //     console.log(shoppers[i].amount)
 //     if (shoppers[i].amount < 200){
 //         console.log(`${shoppers[i].name} has spent ${shoppers[i].amount} and is ineligible for a discount,and still owes ${shoppers[i].amount}`);
 //     } else{
 //         console.log(`${shoppers[i].name} has spent ${shoppers[i].amount} and is eligible for a 12% discount, amount now owed ${shoppers[i].amount - (shoppers[i].amount * .12)}`);
 //     }
 // }
// //Corrected to use a forEach instead of a for loop
//     shoppers.forEach(shopper =>{
//       const discount = shopper.amount > 200 ? shopper.amount * .12 : 0;
//       const total = shopper.amount - discount;
//       console.log(`${shopper.name} -- Total: ${formatToLocaleString(shopper.amount)}, Discount: ${formatToLocaleString(discount)}, Final Total: ${formatToLocaleString(total)}`)
//     })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     */
        const books = [
        {title: 'IT', author:{
            firstName:'Stephen',
            lastName: 'King',
            } },
        {title: 'Hunger Games', author: {
                firstName:'Suzanne',
                lastName: 'Collins',
            }},
        {title: 'Divergent',author: {
                firstName:'Veronica',
                lastName: 'Roth',
            }},
        {title: 'City of Bones', author: {
                firstName:'Cassandra',
                lastName: 'Clare',
            }},
        {title: 'Mortal Instruments',author: {
                firstName:'Joshua',
                lastName: 'Lewis',
            }},
    ];
     /* Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // console.log(books[0].title)
    // console.log(books[0].author.firstName)
    // console.log(books[0].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for (let i = 0; i < books.length; i++) {
    //     console.log(`Book #: ${i+1}\n Title: ${books[i].title}, \n Author: ${books[i].author.firstName}, ${books[i].author.lastName} \n ---`)
    // }

    books.forEach((book, index)=>{
        console.log("book # " + (index + 1));
        console.log("Title " + book.title);
        console.log(`Author ${book.author.firstName} ${book.author.lastName}`);
        console.log(`---`);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    const newBooks = [];
    function createBook(title, authorFirst, authorLast){
        this.title = title;
        this.authorFirst = authorFirst;
        this.authorLast = authorLast;
        newBooks.push(this);
    }


        function showBookInfo(bookObject){
            return `Title: ${bookObject.title} \nAuthor: ${bookObject.author.firstName} ${bookObject.author.lastName}`;
        }
        // console.log(showBookInfo(books[0]));

    for (let i = 0; i < books.length; i++) {
       if (i < books.length){
           console.log(showBookInfo(books[i]));
       }
    }

})();