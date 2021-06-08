// array of objects
// sort array
// based on object.quantity
// since array is not of primitive numbers, might need to write a sort algorithm
// maybe base on insertion sort
// So, array of objects CAN be sorted based on key type (see very bottom)

import * as data from './data.js';

// turn debug mode on/off
// var debug = true;
var debug = false;

function debugPrint( arg ) {
	if( debug == true ) {
		console.log( arg );
	}
}

function insertionSort( arr ) {
	// ascending
	// for each array cell, traverse the array and find the next minimum value 
	// swap the min value with the next min cell

//	let nextLowestIndex = 0;
//	let tempLowestValue = arr[nextLowestIndex];

	// main loop, up to next to last
	for( let i = 0; i < arr.length - 1; i++ ) {
		// next lowest index re-initialize at index i
		let nextLowestIndex = i;
		let tempLowestValue = arr[nextLowestIndex];

		// find the mins, start at i + 1
		debugPrint( "i: " + i );
//		for( let j = 1; j < arr.length; j++ ) {
		for( let j = i + 1; j < arr.length; j++ ) {
			debugPrint( "j: " + j );
			if( arr[j] < arr[nextLowestIndex] ) {
				// if found, new lowest index
				nextLowestIndex = j;
				debugPrint( "found new lowest " + j );
			} // end if
		} // end for j
		// process nextLowestIndex
		tempLowestValue = arr[i];
		arr[i] = arr[nextLowestIndex]; // next lowest could also be equal to i, which means it didn't find a new lowest value
		arr[nextLowestIndex] = tempLowestValue;
		debugPrint( `new lowest value arr[${i}]: ${arr[i]}` );
	} // end for i
	return arr;
}

var myArr = [9, -5, 13, 18, 2, -15, 1000, 10];
// insertionSort( myArr );
// console.log( insertionSort( myArr ));

// based on insertionSort()
function sortArrObjKey( arr, objkey ) {
	// arr.sort( function( a, b ) { return a-b });

	// main loop, up to next to last
	for( let i = 0; i < arr.length - 1; i++ ) {
		// next lowest index re-initialize at index i
		let nextLowestIndex = i;
		let tempLowestValue = arr[nextLowestIndex][objkey];

		// find the mins, start at i + 1
		debugPrint( "i: " + i );
		for( let j = i + 1; j < arr.length; j++ ) {
			debugPrint( "j: " + j );
			// if( arr[j] < arr[nextLowestIndex] ) {
			debugPrint("arr[j][objkey]: " + arr[j][objkey] );
			debugPrint("arr[nextLowestIndex][objkey]: " + arr[nextLowestIndex][objkey] );
			if( arr[j][objkey] < arr[nextLowestIndex][objkey] ) {
				// if found, new lowest index
				nextLowestIndex = j;
				debugPrint( "found new lowest " + j );
			} // end if
		} // end for j
		// process nextLowestIndex
		tempLowestValue = arr[i];
		arr[i] = arr[nextLowestIndex]; // next lowest could also be equal to i, which means it didn't find a new lowest value
		arr[nextLowestIndex] = tempLowestValue;
		debugPrint( `new lowest value arr[${i}][${objkey}]: ${arr[i][objkey]}` );
	} // end for i
	return arr;
}

console.log( sortArrObjKey( data.myPets, "daily food quantity" ));
console.log( sortArrObjKey( data.myPets1, "daily food quantity" ));

// easy way
console.log( data.myPets2.sort( function( a, b ) { return a["daily food quantity"] - b["daily food quantity"] }));