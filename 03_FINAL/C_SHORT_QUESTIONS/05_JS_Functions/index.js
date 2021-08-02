let test0 = "I like to eat fruit";
let test1 = "I  like to eat froot";
let test2 = "I don't like to eat fruit";

var debug = false;  // change to true to turn debug prints on

// strategy
// char array comparison, return number of mismatched indexes per array
// remove all white space
// shortest length array will be the loop index
// the difference in length between the two arrays will be added to the total mismatch count
function ezStringCompare( str0, str1 ) {
	let mismatch = 0
	let wall0 = str0.replace( /\s/g, "" ); // split out white space (with regex "\s") to be more forgiving in string comparison
	let wall1 = str1.replace( /\s/g, "" ); // also do all whitespace in a row with regex switch "g"
		console.log(wall0, "and...", wall1)
	// now split spaceless string into char array
	let arr0 = wall0.split( "" );
	let arr1 = wall1.split( "" );

	// debug
	if( debug ) {
		for( var i = 0; i < arr0.length; i++ ) {
			console.log( arr0[i] )
		}
		for( var i = 0; i < arr1.length; i++ ) {
			console.log( arr1[i] )
		}
	} // end debug

	// find shorter array length to be for loop index
	let short_arr;
	if( arr0.length <= arr1.length) {
		short_arr = arr0;
	} else {
		short_arr = arr1;
	}

	// for loop compare
	for( var i = 0; i < short_arr.length; i++ ) {
		if( arr0[ i ] != arr1[ i ]) {
			mismatch++;
			if( debug ) {
				console.log( arr0[ i ] + " vs " + arr1[ i ] );
			}
		}
	}
	let length_offset = Math.abs( arr0.length - arr1.length );

	if( debug ) {
		console.log( short_arr );
		console.log( length_offset );
	}

	mismatch = mismatch + length_offset;

	console.log( "differences: " + mismatch );
	return mismatch;
} // end ezStringCompare()

//ezStringCompare( test0, test1 );
//ezStringCompare( test1, test2 );
//ezStringCompare( test0, test2 );
ezStringCompare( "This is a string", "There was string" );