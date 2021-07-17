// My previous explanation --
// object notation as { object_0, object_1 }
// what's the comma?
// object_1 will replace object_0
var person = { name: "Shelby", name: "Kristian" }
console.log ( person );
// name: "Kristian"

var person = { name: "Shelby", name: "Kristian", name: "Moussa" }
console.log ( person );
// name: "Moussa"

// Is it accurate to say { object_0, object_1 } ?
// In the end, it's one object
// What's a JS object? A comma separate list of key-value pairs
// So the "sub-objects", when expanded, ultimately resolve into a giant list of kev-value pairs
// With the latest values for a given key overwriting the old values

var obj0 = { name: "Johnny", pet: "bro", number: 55 };
var obj1 = { name: "Chinglin", pet: "tiny", number: 66 };

var big0 = { obj0, obj1 };
console.log( big0 );
// Well, these results are unexpected
// { obj0, obj1 }

// Why didn't it expand out into a giant list of values and start overwriting?

console.log( obj0.name );
// Johnny

console.log( big0.name );
// undefined

var big1 = { name: "Johnny", pet: "bro", number: 55 , name: "Chinglin", pet: "tiny", number: 66 };
console.log( big1 );
// {name: "Chinglin", pet: "tiny", number: 66}

// Try using spread operator?
var big2 = { ...obj0, ...obj1 };
console.log( big2 );
// {name: "Chinglin", pet: "tiny", number: 66}
// That's magic!

// console.log ( ...obj0 );
// Error: Found non-callable @@iterator
// WTF

// So there is some serious magic to spread
// But recall the way object updates work
// From above, the latest values for a given key use the most recent value

// But brand new keys get added in, increasing the size of the object
// aka add new properties to an object
var obj2 = { name: "Dongis", number: 12 };

obj2.weight = "big";

var xyz = "fat";
obj2[ xyz ] = true;

console.log( obj2 );
// {name: "Dongis", number: 12, weight: "big", fat: true}

// But again, for already defined objects, the spread operator will expand them out
var obj3 = { hatePeople: true };

var big3 = { ...obj2, ...obj3 };
console.log( big3 );
// {name: "Dongis", number: 12, weight: "big", fat: true, hatePeople: true}