// Trying to Use Callbacks to Make setTimeout Synchronous

/*
function AA( argAA ) {
    console.log( "AA ran" );
    console.log( argAA );
}

function BB( argBB ) {
    console.log( "BB ran" );
    return argBB;
}

function CC( argCC ) {
    console.log( "CC ran" );
    return argCC;
}

AA( BB ( CC ( "Hello" )));
*/
// CC ran 
// BB ran 
// AA ran 
// Hello

/*
function AA( argAA ) {
    console.log( "AA ran" );
    console.log( argAA );
}

function BB( argBB ) {
    console.log( "BB ran" );
    ( function() { return argBB; })();
}

function CC( argCC ) {
    console.log( "CC ran" );
    return argCC;
}

AA( BB ( CC ( "Hello" )));
*/

// CC ran 
// BB ran 
// AA ran 
// undefined

/*
function AA( argAA ) {
    console.log( "AA ran" );
    console.log( argAA );
}

function BB( argBB ) {
    console.log( "BB ran" );
    // return argBB;
    setTimeout( function() { return argBB }, 100 );
}

function CC( argCC ) {
    console.log( "CC ran" );
    return argCC;
}

AA( BB ( CC ( "Hello" )));
*/

// CC ran 
// BB ran 
// AA ran 
// undefined

/*
function AA( argAA ) {
    console.log( "AA ran ");
    console.log( argAA );
}

function BB( argBB ) {
    console.log( "BB ran ");
    setTimeout( function() { CC( "Hello" )}, 100 );
    return argBB;
}

function CC( argCC ) {
    console.log( "CC ran ");
    return argCC;
}

AA ( BB ( "Goodbye" ))
*/
// BB ran 
// AA ran 
// Goodbye
// CC ran 

/*
function AA( argAA ) {
    console.log( "AA ran" );
    console.log( argAA );
}

function BB( argBB ) {
    console.log( "BB ran" );
    setTimeout( function() { return argBB }, 100 );
}

AA( BB ( "Hello" ));
*/
// BB ran
// AA ran
// undefined

/*
function AA( argAA ) {
    console.log( "AA ran" );
    setTimeout( function() { console.log( argAA) }, 900 );
}

function BB( argBB ) {
    console.log( "BB ran" );
    setTimeout( function() { return argBB }, 100 );
}

AA( BB ( "Hello" ));
*/
// BB ran
// AA ran
// undefined

function heh () {
    console.log( "555" )
}
// console.log( heh );

/*
function AA( argAA ) {
    console.log( "AA ran" );
//    setTimeout( function() { console.log( argAA) }, 900 );
    setTimeout( function() { return argAA }, 100 );
}

function BB( argBB ) {
    console.log( "BB ran" );
    return argBB;
}

console.log( AA( BB ( "Hello" )));
*/
// BB ran
// AA ran
// undefined

// Okay, forget about nesting functions

function funcA() {
    console.log( "A" );
}
function funcB() {
    setTimeout ( function() {
        console.log( "B" ); }, 100
    );
}
function funcC() {
    console.log( "C" );
}

funcA();
funcB();
funcC();