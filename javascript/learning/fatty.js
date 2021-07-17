// es6 => ECMAScript 2015 standard
// let

// define variable as 'var' which has GLOBAL scope

// let has BLOCK scope - only visible with the block

// const - GLOBAL scope
const x = 10;
function myFn() {
    x = 20;
}

// console.log(myFn());
// es6.js:11 Uncaught TypeError: Assignment to constant variable.

function logx() {
    console.log(x);
}
logx();

// Functions
// function myFunc(argument) {

// }

let dog = function() {
    console.log ('Woof!');
}
// dog
// name of function
// dog();
// Woof!

// ES6 Functions - back arrow
const f1 = function(arg) {
    console.log("this is where stuff happens");
}
const f2 = (arg) => {
    console.log("this is where stuff happens");
};
const f3 = () => {
    console.log("this is where stuff happens");
};
const f4 = arg => {
    console.log("this is where stuff happens");
};
const f5 = (arg1, arg2) => {
    console.log('this is where stuff happens');
};

var double = arg => {
     return 2 + arg;
};
// don't need return if replace {} with ()
var double = arg => (
    2 + arg
);
// can also put on the same line and remove () if one line of code 
var double = arg => "I love fat arrows!!";

// Template Literals - call var as `${var}`
var hname = "Bob";
var age = 36;
var speak = "woof";

var text = 'Fred said, "' + hname + '\'s real age is ' + age + ' and his dog said \'' + speak + '\!'
// instead
var text = `Fred said, "${hname}'s real age is ${age} and his dog said ${speak}!`

// Ternary Operator
let message = age > 21 ? "You can buy alcohol" : "You are two young"

// Destructuring
// var people = {};
// people.forEach(function(person) {
//     let {fname, age, married, relative} = person;
//     console.log(`${fname} is ${age} years old.`)
//     console.log(fname);
//     console.log(`They are ${married ? "" : "not"} married.`);
// })

// Part 2 Lecture With Jon
// What will output be?
var a = { name: "Univ of Texas", place: "Austin"}
var b = { name: "Univ of Texas", place: "Austin"}

if (a === b) {
    console.log('equal')
} else  {
    console.log('not equal')
}

// The output should not be equal becaus the keys have to be unique ie hash map
// Jon shows a slide where we highlight that they are objects and not primitives,
// They have different memory locations
// Hmmm, my explanation on unique key may or may not work as an explanation, have to think about it
// I mean, they do have to be unique, how do you know which object you are referring to otherwise?
// So, recall, the keys are the same, they repeat per object, but the values in theory should be different if hashed

// What if we did this?
var c = a
if (a === c) {
    console.log('equal')
} else  {
    console.log('not equal')
}
// equal - because the variables reference the same memory location, pass by reference

// So good question from Dee, what if we now change c, will it change the reference?
// Yes - passed by reference, it will change the reference

// More on Ternary operators
function buyAlcohol(age) {
    let message = age > 21 ? "You can buy alcohol" : "You are too young";
    console.log(message);
}

buyAlcohol(25);

// can use any data type for ternary operators
let areYouLying = (answer) => {
    // if answer is true, then return 'Guilty'
    // if answer is false, then return 'Innocent'
    // This shorthand notation is throwing people off
    return answer ? 'Guilty': 'Innocent!'
}

console.log(areYouLying(false));

// And questions would be what constitutes true/false for non boolean?

const buyMoreAlcohol = (age) => (age > 21 ? 'Buy' : 'Too Young');
console.log(buyMoreAlcohol(18));

// More on Destructuring an Object
const mySchool = { name: "ACC", place: "Austin" };
// He is trying to explain this notation but this is clearly shorthand, so maybe no point in trying to make sense of it
// Note - the shorthand key must obviously match the key
// let { nada } = mySchool --> this wouldn't work
let { name } = mySchool;
console.log(name);

// This is the same as let name = mySchool.name

// Destructuring an Array - WTF, you can do this?
var [first, second, third] = ["Austin","Houston,","Dallas"]

console.log(first); // Austin
console.log(second); // Houston
console.log(third); // Dallas


// more on fat arrow function and return statement

// if braces are going to be used, must have return statement
// or maybe, if a return statement is needed, then also must have curly braces
var double = arg => {
	arg;
}
console.log( double( 6 ) );
// undefined

// if no return statement is needed, then replace {} with (), this is crazy
var double = arg => ( arg );
console.log( double( 7 ) );
// 7

// seriously who thought this notation was a good idea
var double = ( arg ) => ( arg );
console.log( double( 99 ) );
// 99

// if return statement is a one-liner, don't even need parenthesis
var double = arg => arg;
console.log( double( 6 ) );
// 6

// when would you need a return statement? for code that is not part of the return statement
var double = arg => {
	console.log( "yolo bro" );
    return 2 + arg;
};

console.log(double(6));
// 8

// don't need return if replace {} with ()
var double = arg => (
   2 + arg
);

console.log(double(6));
// 8

var double = arg => {
   2 + arg
};
console.log(double(6));
// undefined

// or just don't even use parenthesis
var double = arg => 2 + arg;
console.log( double( 6 ) );

// more on parenthesis

// example of a complicated return statement - if/then
// nope, this stuff below doesn't work
/*
var oddeven = ( arg ) => {
	return ( if ( arg % 2 == 0 ) {
		"odd"
	} else {
		"even"
	})
}
console.log ( oddeven ( 14 ));
*/

// so, holy crap, the parenthesis to remove the return is actually based on some sort of
// escape mechanism
// https://stackoverflow.com/questions/58333992/what-do-parenthesis-surrounding-brackets-in-the-return-statement-of-an-es6-arrow
// put an example here later

