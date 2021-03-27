/*
Question A:
append:
push
concat
spread
splice

code:
*/
console.log(myArray);
var yourArray = ["a", "b", "c", "d", "e"];

// push
yourArray.push("f");

console.log(yourArray);

// concat
var gArray = ["g"];
yourArray = yourArray.concat(gArray);

console.log(yourArray);

// spread
yourArray = [...yourArray, "h"];

console.log(yourArray);

// splice
yourArray.splice(yourArray.length, 0, "i");

console.log(yourArray);

// Question B:
// remove specified index with splice - The arguments are which index to start at, and how many elements to remove
yourArray.splice(3, 2)

console.log(yourArray);