/*
Using JavaScript, write a program that console log the numbers from 5 to 100. But for multiples of 7 print “Hello” instead of the number and for the multiples of 5 print “JM”. For numbers which are multiples of both 5 and 7 log “Hello JM”.  You have approx 20 min


Wrap this into a function that you can call from a console.log (function should return the value)
*/

// js function
// console log 5 to 100
// one number per line
// no arguments needed, but could use them for different mod values
// for loop to 100
// mod 5 and mod 7
// ** do something different

function mod_5_7 () {
//    console.log("hello");
    for (let i = 5; i <= 100; i++) {
        // do checks before console log
        // use if else

        // also check for multiples of 5 and 7
        // guessing - do check for multiple of 5 and 7 first

        // check for multiple of 5
        if ( i % 5 == 0 && i % 7 == 0) {
            // do something
            console.log( "Hello JM" );
        } else if ( i % 5 == 0 ) {
            // do something
            console.log( "JM" );
        } else if ( i % 7 == 0) {
            // do something
            console.log( "Hello" );
        } else {
            console.log( i );
        }
    }
}

mod_5_7();

// 2 suggestions
// multiple of 5 and 7 could be multiple 35
