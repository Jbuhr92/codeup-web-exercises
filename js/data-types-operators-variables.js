// let a = 1;
// let b = a++;
// let c = ++a;
// what is the value of a, b, and c?
// Value of a = 3, b = 1, and c = 3

// let d = "hello";
// let e = false;
//
// d++;
// e++;

// let perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;

// let price = 2.7;
// price.toFixed(2);

// let price = "2.7";
// price.toFixed(2);

// isNaN(0)

// isNaN(1)

// isNaN("")

// isNaN("string")

// isNaN("0")

// isNaN("1")

// isNaN("3.145")

// isNaN(Number.MAX_VALUE)

// isNaN(Infinity)

// isNaN("true")

// isNaN(true)

// isNaN("false")

// isNaN(false)

// to illustrate why the isNaN() function is needed:
// NaN == NaN

// to illustrate why the isNaN() function is needed:
// NaN == NaN

// !true

// !false

// !!true

// !!false

// !!0

// !!-0

// !!1

// !!-1

// !!0.1

// !!"hello"

// !!""

// !!''

// !!"false"

// !!"0"

let sample = "Hello Codeup";

// Use .length to find the number of characters in the string.
let sampleLength = sample.length
console.log(sampleLength)
//     Try to make the sample string all upper or all lower case.
let sampleUpper = sample.toUpperCase()
let sampleLower = sample.toLowerCase()
console.log(sampleUpper, sampleLower)
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
let sampleStudents = `${sample} Students`
console.log(sampleStudents)
//     Replace "Students" with "Class".
let sampleClass = sampleStudents.replace('Students', `Class`)
console.log(sampleClass)
//     Find the index of "c" using .indexOf(). What do you observe?
let cIndex = sampleClass.indexOf(`c`)
console.log(cIndex)
//     Find the index of "C" using .indexOf().
let indexC = sampleClass.indexOf(`C`)
console.log(indexC)
//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let codeupSubstring = sample.indexOf(`Codeup`)
console.log(codeupSubstring)

let costPerDay = 3;
let hercules = 1;
let bear = 5;
let mermaid = 3;
let daysRented = hercules + bear + mermaid;
let totalCost = daysRented * costPerDay;
console.log(`Your total cost for renting these movies is: `,`$` + totalCost);
// Total cost of movies is correct!



let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;
let googleHours = 6, amazonHours = 4, facebookHours = 10;
let totalPay = googlePay * googleHours + amazonPay * amazonHours + facebookPay * facebookHours;
let formattedPaycheck = totalPay.toLocaleString(`en-US`, {style:`currency`, currency:`USD`})
console.log(formattedPaycheck)


let scheduleConflicts = false;
let maxClassSize = 30
let currentClasssize = 24

let canEnroll = !scheduleConflicts && maxClassSize > currentClasssize;
console.log(canEnroll)



let classSpace = `no space`
let classSchedule = `conflicting schedule`
// console.log(classSchedule)
let enrollment
if (classSpace === `Open Space` && classSchedule === `Does not conflict`){
        enrollment = `You can enroll in this class!`;}
    else{
        enrollment = `You cannot enroll in this class.`
    }

console.log(enrollment)

let minCartsize = 2;
// let cartSize = 3;
let premiumMember = false;
let offerExpired = false;

let canOfferApply = ((cartSize >= minCartsize) || premiumMember ) && !offerExpired
console.log(canOfferApply)

let membershipStatus
let nonMember = true
membershipStatus = nonMember === false;
let cartSize = 4
let offerNotExpired = `expired`
    if( offerNotExpired === `not expired` || ((cartSize >= 2 || nonMember === false) && membershipStatus === true)){
        console.log(`You are eligible for a discount!`);
    } else{
        console.log(`You are not eligible for a discount.`);
    }


let username = 'codeup';
let password = 'notastrongpassword';
let invalidSignUp = false;

let minChar = password.length >= 5;
let noUsername = password.indexOf(username) === -1;
console.log(noUsername)
let maxChar = username.length <= 20;
console.log(maxChar)
let userLength = username.length;
let passLength = password.length;
let firstCharUser = username.substring(0,1);
let lastCharuser = username.substring((userLength - 1 ), userLength);
let firstCharPass = password.substring(0,1);
let lastCharpass = password.substring((passLength - 1 ), passLength);

let hasWhiteSpace = firstCharPass === ` ` || lastCharpass === ` ` || firstCharUser === ` ` || lastCharuser === ` `;
console.log(hasWhiteSpace)
if(password.length < 5 || username > 20 || password.includes(username) || username.startsWith(` `) || username.endsWith(` `) || password.startsWith(` `) || password.endsWith(` `)) {
    invalidSignUp = true;
} else{ invalidSignUp = false;
}

if(invalidSignUp === false){
    console.log(`Congratulations on signing up!`)
} else if (invalidSignUp === true) {

    console.log(`Please meet the conditions for creating username and password.`)
}


