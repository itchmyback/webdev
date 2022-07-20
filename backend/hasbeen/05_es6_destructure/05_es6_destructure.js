// Object - single entry
var pet = { animal: "cat" };

console.log( pet );

// Print the value of animal by calling object key

// bracket notation
console.log ( pet[ 'animal' ]);

// dot notation
console.log( pet.animal );

// es6 destructure notation
// NOTE - var name MUST match the key name
var { animal } = pet;

console.log( animal );

// Comparison benefit?
// animal vs pet.animal

// Object - when name and key are named the same
var data = { data: "something" };

// This is not allowed
// var { data } = data;

// But, will encounter a situation with importing data where this sort of is allowed

// Also can rename key
var { data: thatdata } = data;
console.log ( thatdata );

console.log( "The object is: ", data )
console.log( "Can't destructure without declaration: ", { data })

// Object - double entry
var creeper = { oh: "man", baby: "tonight" };
var { oh, baby } = creeper;

console.log( oh );
console.log( baby );
