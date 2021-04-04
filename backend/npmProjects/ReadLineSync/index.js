var readlineSync = require('readline-sync');

let uname = readlineSync.question("What is your name?");
let food = readlineSync.question("What is your favorite food?");
let drink = readlineSync.question("What is your favorite drink?");
console.log(`Hi ${uname}, your favorite food is ${food} and your favorite drink is ${drink}.\n`);


console.log("How spicy would you like your tacos?");

let spiceList = ["spicy", "very spicy", "face"];

let x = readlineSync.keyInSelect(spiceList, "");

console.log(`Ok, so you want your tacos to be ${spiceList[x]}. Are you sure about this?\n`);

if(readlineSync.keyInYN("")) {
	console.log("Okay, we will have your order right out.");
} else {
	console.log("What's the matter? Can't handle the heat?");
}
