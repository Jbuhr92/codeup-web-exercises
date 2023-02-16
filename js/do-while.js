"use strict";

console.log("Do-while loop");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let k = randomNumber(50, 100);

do{
    let coneSold = randomNumber(1, 5);
    if (coneSold <= k) {
        k -= coneSold;
        console.log(`${coneSold} sold`)
    } else if (coneSold > k) {
        console.log(`Cannot sell you ${coneSold} I only have ${k} left.`);
    }
    if (k === 0){
        console.log(`Yay I sold them all!`)
    }
} while (k > 0)


let coneInventory = randomNumber(50, 100);

do{
    let coneBought = randomNumber(1, 5)
    if(coneBought > coneInventory){
        console.log(`Cannot sell you ${coneBought} I only have ${coneInventory} left`)
        console.log(`${coneBought} Sold`)
        coneInventory = 0
    } else{
        console.log(`${coneBought} Sold`)
        coneInventory -= coneBought
    }
    console.log(`${coneInventory} left`)
}while(coneInventory > 0);

console.log(`Yay I sold all of the cones!`)