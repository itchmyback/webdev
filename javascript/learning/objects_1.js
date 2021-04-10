// Goal is to review some properties of objects
// Everything except primitives is an object

// When declaring, the key is in quotes and assumed to be a string
// Objects can be created with an object literal - comma separated list of key-value pairs inside curly braces
var people = {
    fname: "Johnny",
    lname: "Nguyen"
}

// Getting properties (key:value are properties)
/* Dot vs Bracket notation - use the word property below, but maybe it's more accurate to say "key", because that's the only property addressed
    dot -- property assumed to be a string, also can't be a variable
    bracket -- can be a variable, but if string must be quoted, and because strings are explicit, can use more complicated names
    more futher below
*/

console.log(people.fname);
// Johnny

console.log(people["fname"]);
// Johnny

console.log(people.lname);
// Nguyen

console.log(people["lname"]);
// Nguyen

// Adding a new property --
// with dot notation
people.mname = "Gia";
console.log(people.mname);

// -- from a variable
var ageStr = "age";
var ageNum = "99";

// -- from a variable with dot notation
people.ageStr = ageNum;
console.log(people);
// {fname: "Johnny", lname: "Nguyen", mname: "Gia", ageStr: "99"}
// Note - the desired key was "age", but it used the var name "ageStr" as a string

// -- from a variable with bracket notation
people[ageStr] = ageNum;
console.log(people);
// {fname: "Johnny", lname: "Nguyen", mname: "Gia", ageStr: "99", age: "99"}
// There we go

// Adding variables iteratively
// From the midterm, they wanted an object that looked like this {1: "a", 2: "b", 3: "c"}
// NOTE -- this is not an array of objects, it's one object
// WHY? Because all the keys are different - an array of objects has repeating keys per array index

// So, there's a couple of approaches to iteratively making the above object,
// but regardless dot notation will not work

// Using a counter index as the name
var arr = ["", "a", "b", "c"];
var obj = {};
for(var i = 1; i <= 3; i++) {
    obj[i] = arr[i];
    // obj.i would give {i: "value"} where "i" is the string value of the variable name
}
console.log(obj);
// {1: "a", 2: "b", 3: "c"}

// Combining two arrays
var keyArr = [1, 2, 3];
var valueArr = ["a", "b", "c"];

var obj0 = {};

for(var i = 0; i <= keyArr.length; i++) {
    obj0[keyArr[i]] = valueArr[i];
}
console.log(obj);
// {1: "a", 2: "b", 3: "c"}

// What I'll call "Maps" for now
// An array of objects
var mappy = [
                {fname: "John", lname: "Nguyen" },
                {fname: "Annie", lname: "Nguyen"},
                {fname: "Luke", lname: "Nguyen"},
                {fname: "Kate", lname: "Nguyen"}
]

// How to iterate through?
// There are object methods - keys(), values(), entries()
// We iterate through the array and grab keys, values, or entries

// Use foreach to iterate through the array
mappy.forEach (function (person) {
    console.log(person);
})
/*
{fname: "John", lname: "Nguyen"}
{fname: "Annie", lname: "Nguyen"}
{fname: "Luke", lname: "Nguyen"}
{fname: "Kate", lname: "Nguyen"}
*/

// Now lets get properties
// Don't forget the parenthesis

// Below gives nasty results
console.log(mappy.keys());
console.log(mappy.values());
console.log(mappy.entries());
// Why? Because mappy is an array - DON'T BE FOOLED
// So let's try targetting the first index of the array, which is an object
console.log(Object.keys(mappy[0]));
console.log(Object.values(mappy[0]));
console.log(Object.entries(mappy[0]));
/*
(2) ["fname", "lname"]
(2) ["John", "Nguyen"]
0: (2) ["fname", "John"]
1: (2) ["lname", "Nguyen"]
*/

// Iterate over properties with entries()
// Lots going on here -
// person is the array element as an argument 
// person is also an object, so it can be used in Object.method(person)
mappy.forEach (function (person) {
    for (var [key, value] of Object.entries(person)) {
        console.log(person[key]);
//        console.log(person[value]); This is undefined but I don't know why
    } // end for
})
/*
John
Nguyen
Annie
Nguyen
Luke
Nguyen
Kate
Nguyen
*/

// Iterate over properties with keys()
// Below is wrong because key is listed as an array var
mappy.forEach (function (person) {
    for (var [key] of Object.keys(person)) {
        console.log(person[key]); // undefined
        console.log(key); // f, l
    } // end for
})

// This is correct
mappy.forEach (function (person) {
    for (var key of Object.keys(person)) {
        console.log(person[key]);
    } // end for
})
/*
John
Nguyen
Annie
Nguyen
Luke
Nguyen
Kate
Nguyen
*/

mappy.forEach (function (person) {
    for (var key of Object.keys(person)) {
        console.log(key);
    } // end for
})
/*
fname
lname
fname
lname
fname
lname
fname
lname
*/

mappy.forEach (function (person) {
    for (var value of Object.values(person)) {
        console.log(value); // same as person[key]
    } // end for
})
/*
John
Nguyen
Annie
Nguyen
Luke
Nguyen
Kate
Nguyen
*/


// mappy is an array of objects

console.log(mappy);
// (4) [{…}, {…}, {…}, {…}]
// 0: {fname: "John", lname: "Nguyen"}
// 1: {fname: "Annie", lname: "Nguyen"}
// 2: {fname: "Luke", lname: "Nguyen"}
// 3: {fname: "Kate", lname: "Nguyen"}

console.log({mappy});
// {mappy: Array(4)}

// people is an object

// console.log(people);
// {fname: "Johnny", lname: "Nguyen", mname: "Gia", ageStr: "99", age: "99"}

console.log({people});
// {people: {…}}
// so presumably
// {people: {fname: "Johnny", lname: "Nguyen", mname: "Gia", ageStr: "99", age: "99"}}

var miso = "soup";
console.log({miso});
// {miso: "soup"}

// So what does {expression} mean?
// Who knows, but the syntax looks like
// {expression: contents}
// It's like it creates an object between the expression and it's value.

// BUT, but for destructing purposes, {} notation behaves differently
// NOTE {mappy} does not destructure because mappy is the object
// To destructure, the key must go in the {}, not the object
// const {fname} = mappy;
// console.log(fname);
// undefined - what?????
// const {fname, lname} = mappy;
// console.log(fname);
// undefined - what?????
// oh it's because mappy is an array of objects

const {fname} = people;
console.log(fname);
// Johnny - there we go!

// destructure, the longer way
// But this avoids listing out discrete values of keys
// And also if the keys are not known

function destruction(people) {
    for (var [key, value] of Object.entries(people)) {
        console.log(key);
        console.log(value);
        console.log(people[key]);
    } // end for
}

console.log("Long way");
destruction(people);

console.log("Longer way");
// destructure with a map
mappy.forEach (function (person) {
// This doesn't work because the key values must be known
//    let {key, value} = person;
    let {fname, mname, lname, age} = person;
    console.log(fname);
    console.log(lname);
    } // end for
)
