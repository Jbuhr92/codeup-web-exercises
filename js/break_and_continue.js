// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.
// for (/*initialization*/let i = 1;/*condition*/ i <= 10;/*increment*/ i++)
console.log(`Break-and-Continue loop`)



// while(true){
//     const number = parseFloat(prompt("Enter an odd number between 1 and 49."));
//     if (number % 2 === 1 && number >= 1 && number <= 50){
//         for (let i = 1; i <= 50; i+=2){
//             if (i === number) continue;
//             console.log(`here is an odd number: ${i}`);
//         }
//         break;
//     }
// }

//THIS IS ALSO CORRECT//

let userPrompt;
while(true){
    userPrompt = parseInt(prompt("Please enter an odd number between 1 and 49"));
    if(userPrompt % 2 === 1 && userPrompt >= 1 && userPrompt <= 50 ){
        break;
    }
}
//userPrompt good to go!
for(let i = 1; i<= 49; i += 2){
    if (i === userPrompt){
        console.log(`Yikes! Skipping number ${i}`)
        continue;
    } console.log(`Here is an odd number: ${i}`)
}