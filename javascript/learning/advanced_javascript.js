// JSE = javascript engine
// parsing is where the JSE reads the code and makes sense of it
// syntax parser

// parse, compile to machine code

// Lexical Environment -- lexical - language
// for JS - where is the function in the program? (not memory)

// So the parser will keep track of where the function is in the code

// Execution Context -- like a box where the code is running
// contains all the memory objects used by the program
// vars, functions, etc
//
// There is a global execution context
// Every function that runs is a new little box, a new little execution context
// Related to scope
// A Russian doll of boxes

// Global Environment
// When app.js is run, there is lexical env, global obj, variable object, "this" binding
// When JS begins, "this" points to the global object
// But, inside a function, "this" points to the object that owns the function
// If there's no object that owns the function, then by default it points to the global object
// Sort of like Python "self"

// binding - maps a function to "this" object in memory

// variable environment - variable table

var getName = function() {
    var a = "JP";
    console.log( a );
}
getName();
// JP

getName.author = "Piyush";
getName.date = new Date();

console.log( getName.author );
console.log( getName.date );


var thisName = function() {
    var a = "JP";
    console.log( this );
}
thisName();
// Window
// The object that contains the function thisName(), the global object

// NOTE -this is not a callback function, it's a nested function
// A callback function is an argument to the calling function
function outer() {
    console.log( "message from outer" );
    inner();
}

// variable scope - interesting results, see below
var b = "yolo";

function inner() {
    console.log( "message from inner" );
    console.log( "printing ", b );
    var b = "Deng";
}

console.log( b );
outer();

// box
// outer -> its own box
// inner -> its own box, but lives in the box above
// execution

// use breakpoint - cool - click to the left of the line number
// in VSC, but more importantly, in the browser debug, Sources tab
// but to run in VSC, triangle play button, run and debug, node.js

// Collections - other than the 7 primitive types, everything else is an object

// Memory and Hoisting
var myVar = "Value of myVar";
function myFunc() {
    console.log( "Output from myFunc" );
}

console.log(myVar);
myFunc();
// Value of myVar
// Output from myFunc

console.log(myVar1);
var myVar1 = "Value of myVar1";
// undefined

myFunc1();
function myFunc1() {
    console.log( "Output from myFunc1" );
}
// Output from myFunc1

// console.log(myVar2);
// ReferenceError

// So what's happening?
// var myVar1 = "Value of myVar1"
// is equivalent to
// var myVar
// myVar = "Value of myVar"
// So the variables declarations are collected and maybe "hoisted"
// BUT, hoisting for a variable is a myth???
// Piyush says Parser makes two passes - definition pass + execution pass

// var myVar = 'I love red cars!' -- defining + executing? because it's a two part statement
// var myVar; defining
// myVar = 'I love red cars!' -- executing

// Functions
// declaration
function someFunc( arg ) {
    console.log( "some" );
}

// expression
const functionName = function( argument) {
    console.log( "stuff" );
}

// invocation
// functionName( parameter );

// difference between declaration and expression - expression can only be used during execution

// ES6
// ECMAScript
// discussion on the history of browsers and their makers
const f2 = ( arg1, arg2 ) => {
    return "this stuff yo";
};

const f1 = arg => {
// or const f1 = ( arg ) => {
    //something
};

// implied return format
const doubler = arg => (
    `this is the double you": ${arg * 2}`
);

// Why fat arrow notation? because of a bug in the execution context of the old way

// templating - know already

// variables - var vs let
// let only has block scope

var b = 10;

if( b === 10) {
    var b = 40;
    console.log( "Inside b: " + b );
}
// 40

console.log( "Outside b:", b );
// 40
// expected 10, but the declaration in the if scope takes over globally

var c = 10;

if( c === 10) {
    let c = 40;
    console.log( "Inside c: " + c );
}
// 40

console.log( "Outside c:", c );
// 40

function testme() {
    let b = 50;
    console.log( "Inside function, the value of b is:", b );
}
testme();

function testyou() {
    console.log( "Inside function, the value of b is:", b );
//    let b;
// Gives initialization error
//    var b;
// undefined
}
testyou();

function outerMost() {
    let d = 19;
    function testThem() {
    //    var d = 99;
        console.log( "d is:", d );
    }
    testThem();

}
outerMost();
// 19

let aaaa;

// more variable scope
function jubei() {
    for( var i = 0; i < 5; i++ ) {
        console.log( "Yo" );
    }
    console.log( i );
}

jubei();
// It will print "Yo" 5 times, and i will print as 5

// console.log(i);
// i is not defined

// constants and primitives
// primitives copy by value
// objects copy by reference


// return statement
function test0() {
    return
        { 'hello there' }
}
console.log( test0() );

function test1() {
    return;
        ( 'hello there' )
}
console.log( test1() );

function test2() {
    return
        ( 'hello there' )
}
console.log( test2() );

// initialized values
function adder( a = 1, b = 2 ) {
    return a + b;
}

adder();
adder( 10, 20 );