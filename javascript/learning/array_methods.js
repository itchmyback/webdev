var pets = ["Moxie", "Doggo", "Hootchie", "Johnny"];

console.log(pets);
// (4) ["Moxie", "Doggo", "Hootchie", "Johnny"]

var petNames = pets.toString();
console.log(petNames);
// Moxie,Doggo,Hootchie,Johnny

var backToArr = petNames.split(",");
console.log(backToArr);
// Array result
// (4) ["Moxie", "Doggo", "Hootchie", "Johnny"]

console.log(pets.join(' * '));
// String result
// Moxie * Doggo * Hootchie * Johnny

var people = ["JM", "George"];

console.log(pets.concat(people));
// (6) ["Moxie", "Doggo", "Hootchie", "Johnny", "JM", "George"]

// indexOf()
console.log(pets.indexOf("Johnny"));
// 3
console.log(pets.indexOf("Apple"));
// -1

var fruits = ["Apple", "Banana", "Orange", "Apple", "Mango"];
// add starting element to search with indexOf
console.log(fruits.indexOf("Apple", 0));
// 0
console.log(fruits.indexOf("Apple", 1));
// 3
console.log(fruits.indexOf("Apple", 2));
// 3
console.log(fruits.indexOf("Apple", 4));
// -1

// push() - adds new element to end of Array
pets.push("MonkeyButt");
console.log(pets);
// (5) ["Moxie", "Doggo", "Hootchie", "Johnny", "MonkeyButt"]

// pop() - removes the last element of the array and returns that value
console.log(pets.pop());
// MonkeyButt
console.log(pets);
// (4) ["Moxie", "Doggo", "Hootchie", "Johnny"]

// shift() - removes first element of the array and returns the value
console.log(pets.shift());
// Moxie

// unshift() - adds new element to the beginning of the Array
console.log(pets.unshift("MonkeyButt"));
// 4
console.log(pets);
// (4) ["MonkeyButt", "Doggo", "Hootchie", "Johnny"]

// slice() returns the seleted elements in a new array, like substring
console.log(pets.slice(1,3));
// (2) ["Doggo", "Hootchie"]
console.log(pets.slice(2,3));
// ["Hootchie"]
console.log(pets.slice());
// makes a copy of the array
// (4) ["MonkeyButt", "Doggo", "Hootchie", "Johnny"]
console.log(pets.slice(1,4));
// (3) ["Doggo", "Hootchie", "Johnny"]
// Note: that index 4 does not exist, but is allowed
console.log(pets.slice(1));
// (3) ["Doggo", "Hootchie", "Johnny"]
console.log(pets.slice(1,-1));
// (2) ["Doggo", "Hootchie"]
// Note: a negative number references the last index

// for loop
var numbers = [3, 5, 1, 10, 2];

console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

console.log(numbers);

// forEach loop
// Note: "element" can be any name
pets.forEach(
        function(element) {
            console.log(element);
        } // no semi-colon
);
// MonkeyButt
// Doggo
// Hootchie
// Johnny