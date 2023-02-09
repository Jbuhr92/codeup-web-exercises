let costPerDay = 3;
let hercules = 1;
let bear = 5;
let mermaid = 3;
let daysRented = hercules + bear + mermaid;
let totalCost = daysRented * costPerDay;
console.log(`Your total cost for renting these movies is: `,`$` + totalCost);
//Total cost of movies is correct!
let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;
let googleHours = 6, amazonHours = 4, facebookHours = 10;
let totalPay = googlePay * googleHours + amazonPay * amazonHours + facebookPay * facebookHours;
//console.log(totalPay) total pay is equal to 7420
console.log(`The total pay for this week is: `, `$` + totalPay)
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
let password = 'notastrongpassword ';
let invalidSignUp = false;

if(password.length < 5 || username > 20 || password.includes(username) || username.startsWith(` `) || username.endsWith(` `) || password.startsWith(` `) || password.endsWith(` `)) {
    invalidSignUp = true
}

if(invalidSignUp === false){
    console.log(`Congratulations on signing up!`)
} else if (invalidSignUp === true) {

    console.log(`Please meet the conditions for creating username and password.`)
}


