// console.log(`Hello from external Javascript`);

alert(`Welcome to my Website!`);

let userPrompt = prompt(`What is your favorite color?`);
alert(`Great, ${userPrompt} is my favorite color too!`)


// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids:

//     The little mermaid (for 3 days),
//     Brother Bear (for 5 days, they love it),
//     and Hercules (1 day, you don't know yet if they're going to like it).
//     If price for a movie per day is $3, how much will you have to pay?



let hercules = parseInt(prompt(`how many days are you going to be renting Hercules?`));
let bear = parseInt(prompt(`how many days are you going to be renting Brother Bear?`));
let mermaid = parseInt(prompt(`how many days are you going to be renting The Little Mermaid?`));
let costPerDay = parseInt(prompt(`What is the cost per day to rent these movies?`));
let daysRented = hercules + bear + mermaid;
let totalCost = daysRented * costPerDay;
let customerCost = totalCost.toLocaleString(`en-US`, {style:`currency`, currency:`USD`})
alert(`Your total cost for renting these movies is: ${customerCost}`)


//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, 
//     they pay you a different rate per hour.
//     Google pays $400, Amazon $380, and Facebook $350. 
//     How much will you receive in payment for this week? 
//     You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


let googlePay = parseInt(prompt(`How much do you earn per hour from Google?`));
let amazonPay = parseInt(prompt(`How much do you earn per hour from Amazon?`));
let facebookPay = parseInt(prompt(`How much do you earn per hour from Facebook?`));
let googleHours = parseInt(prompt(`How many hours did you work for Google this week?`)), amazonHours = parseInt(prompt(`How many hours did you work for Amazon this week?`)), facebookHours = parseInt(prompt(`How many hours did you work for Facebook this week?`));
let totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
let formattedPaycheck = totalPay.toLocaleString(`en-US`, {style:`currency`, currency:`USD`});

alert(`You earned ${formattedPaycheck} this week from working at these companies!`);


// A student can be enrolled in a class only 
// if the class is not full and 
// the class schedule does not conflict with her current schedule.

let scheduleConflicts = confirm(`Does this class conflict with your schedule? If the class does conflict with your schedule click 'Cancel', if the class does not conflict with your schedule click 'Ok'`);
let maxClassSize = parseInt(prompt(`What is the max class size for this class?`)); // 30
let currentClassSize = parseInt(prompt(`What is the current class size for this class?`)); // 24

let canEnroll = scheduleConflicts && maxClassSize > currentClassSize;
if (canEnroll){

    alert(`You can enroll in this class!`);
} else{
    alert(`You cannot enroll in this class!`);
}


//     A product offer can be applied only:
//     if a person buys more than 2 items,
//     and the offer has not expired.
//     Premium members do not need to buy a specific amount of products.

let minCartsize = 2;
let cartSize = parseInt(prompt(`How many items are in your cart?`))// 3
let premiumMember = confirm(`Do you hold a premium membership? If yes click 'Ok' if no click 'Cancel'`);
let offerValid = confirm(`Is the current discount offer expired? If currently not expired click 'Ok', If current offer is expired click 'Cancel'`);

let canOfferApply = ((cartSize >= minCartsize) || premiumMember ) && offerValid

if(canOfferApply){
    alert(`The offer can be applied to your cart!`)
} else{
    alert(`This offer cannot be applied to your cart.`)
}
