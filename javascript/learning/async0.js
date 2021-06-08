// Asynchronous

// order of declaration doesn't matter
function func2() {
    func1();
};

function func1() {
    console.log( "Show Up" );
};

func2();
// Show Up

// Demo asynchronous nature of JavaScript
console.log("1");
console.log("2");
console.log("3");
// 1
// 2
// 3

console.log("1");
setTimeout( function() { console.log("2 - out of order because of setTimeout") }, 500 );
console.log("3");
// 1
// 3
// 2 - out of order because of setTimeout

// Is this actually set up as a callback?
function func3() {
    return "hi";
};

function func4() {
    var greet = func3();
    console.log( greet );
};

func4();
// hi

// probably need setTimeout to really demo asynchronous
// Attempt at a callback where ideally setTimeout waits to complete
// Definitely not waiting
function func5() {
    setTimeout( function() { console.log( "Hello" ) }, 3000 );
    console.log( "How are you?" );
};
func5();
// How are you?
// 2 - out of order because of setTimeout
// Hello


function func6() {
    setTimeout( function() { console.log( "Howdy" ) }, 3000 );
};
func6()
console.log( "How are you?" );
// How are you?
// How are you?
// 2 - out of order because of setTimeout
// Hello
// Howdy

// To use a callback function properly, it must be an ARGUMENT to the function, not just exist in the function
function func7( greetme ) {
    greetme();
    console.log( "That sounds good " );
};
func7(func6);
// still didn't work
// That sounds good 
// 2 - out of order because of setTimeout
// Hello
// Howdy
// Howdy

// It seems like any independent statements will execute. So those statements must be arguments as well
function func8() {
    console.log ("Third times the charm" );
};

function func9( greetme, state ) {
    greetme();
    state();
};
func9( func6, func8 );
// Third times the charm
// 2 - out of order because of setTimeout
// Hello
// Howdy

// still wrong

function func10( greetme, state ) {
    setTimeout( function() {
        greetme();
        state();
        }, 4000
    );
};
func10( func6, func8 );
// Third times the charm
// Howdy