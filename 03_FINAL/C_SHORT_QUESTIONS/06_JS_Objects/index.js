const apple = {
	type: 'Granny Smith',
	weight:  4
}

// orange points to apple object, not separate objects
// var orange = apple;

// shallow copy with spread operator creates a new object value
var orange = { ...apple };

// orange and apple point to same object
// changing 1 affects all references, so now both their types are Clementine
orange.type = 'Clementine'

console.log('Apple type is ', apple.type)
// Clementine

// after correction
// Granny Smith