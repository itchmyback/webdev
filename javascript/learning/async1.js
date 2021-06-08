// Callback

// OKAY - finally, this is how the callback works
// The functions cannot be expected to run sequentially in order when listed at the same level of execution
// The callback occurs because the subsequent fast function is now a dependency of the first slow function
// Contrast to func7()

function func20 () {
    console.log( "This will probably work" );
}

function func21( state ) {
    setTimeout( function() { console.log( "HowdyHowdy" ) }, 200 );
    state();
};
// func21( func20 );

// aaaaaaand it didn't work
// more research
// from stackoverflow, https://stackoverflow.com/questions/47720012/how-to-know-if-a-javascript-callback-is-synchronous-or-asynchronous
// It seems like setTimeout, setInterval, requests, and events are async
// So callbacks will never process them synchronously
// Built-In callbacks like map are synchronous

let arr = [];

// too long
// for ( var i = 0; i < 100000000; i++ ) {
// for ( var i = 0; i < 50000000; i++ ) {
// for ( var i = 0; i < 10000000; i++ ) {
for ( var i = 0; i < 1000000; i++ ) {
    arr[i] = i;
};

// console.log(arr[999999]);

function longfunc( x ) {
    var y = Math.sqrt( x );
    var z = Math.sqrt( y );
    var a = Math.sqrt( z );
    return a;
};

var arr1 = arr.map( longfunc );
console.log(arr1[999999]);
console.log( "me first" );
// 5.6234125489765265
// me first

// It waited to do the math first

// var arr1 = arr.map( longfunc );
console.log(arr.map( longfunc )[999999] );
console.log( "me first" );
// 5.6234125489765265
// me first


console.log(arr.map( longfunc )[999999] );
setTimeout( function() { console.log("with timeout") }, 1 );
console.log( "me first" );
// 5.6234125489765265
// me first
// with timeout

function longerfunc( x ) {
    for ( let i = 0; i < x; i++ ) {
        var y = Math.sqrt( x );
        var z = Math.sqrt( y );
        var a = Math.sqrt( z );
    }
    return a;
};
// What's the explanation here? IMO, map is running synchronously. setTimeout gets skipped over asynchronously
console.log(longerfunc( longerfunc( 999999999 )));
console.log( "me yo" );

// 1.3823722273363002
// me yo
// with timeout

// This could be a new file, but let's try this after gaining
// more understanding on asynchronous operations

// setTimeout is an asynchronous function by definition

function AAA( argA ) {
    console.log( argA );
    console.log( "AAA ran ");
}

function BBB ( argB ) {
    console.log ( "BBB ran ");
    return "Salute";
}

setTimeout( function() { AAA( BBB ) }, 1 );