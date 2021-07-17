/*
Write a JavaScript function that reverses a number.
For example, x = 32243;
Expected Output : 34223;
*/


// js function
// reverse means take characters and output them in reverse order
// function take an argument
// will require string manipulation
// assume console log
// used arrays to reverse
// output should not be an array
// it should be a number again

function reversenum( number ) {
//     console.log( number );
    // confirm if string
//    console.log(number.toString());

    // what will be string manipulation
    // try putting string into array of characters
    // then reverse the array
    // assume number argument will be cast as string with split method

    let output = number.toString().split("");
    console.log( "output:", output);
    // output is ["1000"]
    /*
    for (let i = 0; i < output.length; i++ ) {
       console.log( output[i]);
    }
    */
    // could have checked array size, but for loop prints 1 element
    // tried correcting split syntax and that worked

    // properly split number argument into array of chararcters
    // now reverse array
    // believe array method will do this
    // but will try with reverse for loop
//    console.log( "output reverse:", output.reverse() );
   
	// NOTE -- array.reverse() permanently changes the direction
    console.log( "output:", output);
    // not sure why this didn't work
	console.log( "output.length:", output.length );
	// dumbass - for loop condition is false from the beginning
    // for( let i = output.length; i < 0; i-- ) {
    for( let i = output.length - 1; i >= 0; i-- ) {
        // check on loop printing
//        console.log(i);
//        console.log(output[i]);
		console.log( "i:", i, "array:", output[i]);
    }
   
    // use two step conversion
    // array to string
    // string to number

	let revoutput = output.reverse();
	// array.toString() has commas
    let finaloutput = revoutput.toString();
    console.log( finaloutput );
	// need to use join() with no delimiter "" or a for loop
	let theoutput = revoutput.join("");	
    console.log( theoutput );
	let arrstr = "";
	for( let i = 0; i < revoutput.length; i++ ) {
		arrstr = arrstr + revoutput[i];
	}
	console.log( arrstr );
//    let finalnumber = finaloutput.toNumber();
	// parseInt() doesn't do what you think it does
    // let finalnumber = parseInt( finaloutput );
//	let finalnumber = Number( finaloutput );
	// also finaloutput had commas in it
	let finalnumber = Number( theoutput );
    console.log(finalnumber);
	console.log( typeof( finalnumber ) );
}

reversenum( 32243 );

// could have used opposite of split => join
/*
let num = 12345
num = Number(num.toString().split(‘’).reverse().join(‘’))console.log(num)
console.log(typeof(num))
*/

// look up parseInt
// for mix of number and string arguments