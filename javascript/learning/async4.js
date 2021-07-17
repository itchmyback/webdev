// trying out code from a website
// https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997

// review or even learning of the a callback function

function doIt( arg, callback) {
	let string = "Regular Callback function " + arg;
	callback( string );
}

// callback is not implicitly or explicitly defined
// so can define callback() during main function call using anonymous function

// This is hurting me a little trying to figure this out
// In the main function definition, the callback function has no parameters per se
// Now, while defining the callback as an anonymous function, it's given a parameters 
// But since main function is being called, everything must be an actual argument?
doIt( "nothing special", function( mama ) { // string arg and then anonymous callback function arg
		console.log( mama )
		// So following example, the argument to the anonymous callback function is string
		// So the anonymous callback function will print string
		// Where does string come from? It's supplied by the main function
		// So, changed callback parameter to mama, still works
		// Lesson? Main function call is looking for args
		// BUT, anonymous function definition is defining parameters, crazy
} // end callback() function definition (with parameters)
) // end main function() args

// So let's try the dreaded setTimeout

function alpha() {
	console.log( "AA" );
}

setTimeout( alpha, 500 );
console.log( "BB" );
// BB
// AA
// as expected

// Also, maybe let's try the "other" way to start off here, instead of anonymous callback definition
// Well, the issue is setTimeout function() parameter doesn't really allow arguments (how stupid), 
// although apparently now it can be done with Function.prototype.bind()
// So...back to anonymous function definition?
/*
function hell( param, callback ) {
//	setTimeout( callback( param ), 500 );
	setTimeout( function() {
			callback( param );
		}, //end anonymous()
		500
	); // end setTimeOut
	console.log( "BBB" );
} // end main function

// print function
function justprint( somestring ) {
	console.log( somestring );
}

hell( "AAA", justprint);
*/

// I change my mind, the above website is actually kind of garbage
// reading https://codingthesmartway.com/async-programming-with-javascript-callbacks-promises-and-async-await/
// let's try again

function hell( param, callback ) {
	setTimeout( function() {
			callback( param );
		}, //end anonymous()
		500
	); // end setTimeOut
} // end main function

// print function
function justprint( somestring ) {
	console.log( somestring );
}

hell( "AAA", function( cbparam ) {
		console.log( cbparam );
	} // end anonymous callback definition
	// NOPE - the same problem again, where does console.log( "BBB" ) go?
);

// FINALLY this website breaks down an actual solution to the problem
// https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript

// BUT, unfortunately it highlights what I had been fearing above. The solution is to take
// any subsequent functions after the setTimer and essentialy stick them inside setTimer???
// That seems like such a trivial cop out solution