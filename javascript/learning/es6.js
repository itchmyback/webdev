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
const f1 = (arg) => {
    console.log("this is where stuff happens");
};
const f1 = () => {
    console.log("this is where stuff happens");
};
const f1 = arg => {
    console.log("this is where stuff happens");
};
const f2 = (arg1, arg2) => {
    console.log('this is where stuff happens');
};

var double = arg => {
     return 2 + arg;
}
// don't need return if replace {} with ()
var double = arg => (
    2 + arg;
)
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
people.forEach(function(person) {
    let {fname, age, married, relative} = person;
    console.log(`${fname} is ${age} years old.`)
    console.log(fname);
    console.log(`They are ${married ? "" : "not"} married.`);
})
