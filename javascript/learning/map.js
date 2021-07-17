// map
// array

let arr = [ 1, 2, 3 ];

let arr3 = arr.map( function(el) {
	return el * 3;
});

console.log( arr3 );
// [ 3, 6, 9 ]

let arr4 = arr.map( ( el ) => {
	return el * 4;
});

console.log( arr4 );
// [ 4, 8, 12 ]

let users = [
	{ firstName : "Susan", lastName: "Steward" },
	{ firstName : "Daniel", lastName: "Longbottom" },
	{ firstName : "Jacob", lastName: "Black" }
];

let fullName = users.map( ( obj ) => {
	return `${ obj[ 'firstName' ] } + ${ obj[ 'lastName' ] }`
	// return `${ obj.firstName } + ${ obj.lastName }`
})

console.log( fullName );