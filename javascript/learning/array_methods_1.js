// MAP transforms array 
// like foreach over arrays
var numbers = [4, 9, 16, 25];
var squareRoots = numbers.map(Math.sqrt);

numbers.map(function(el){
    // let's multiply numbers times 5
    console.log(5 * el);
});

// let's assign
var multiply = numbers.map(function(el){
    return 5 * el;
});

function incrementByOne( element ) {
    return element + 1;
}

myArray = [ 1, 2, 3, 4];

myArray.map( incrementByOne );
// [ 2, 3, 4 ,5 ]

// FILTER - creates a new array, filled with array elements that pass a conditional
// does not change original array
// I missed the code

// REVERSE - reverse elements
// pets.reverse();

// SORT
// sort changes are permenent, they alter the array
// pets.sort();
//
// recall - numbers are sorted as UTF-16 strings

var yopets = ["Moxxi", "Pickle", "Hootchie", "Monkeybutt"];

// note the array is modified by sort()
console.log(yopets);

// this sort will work as expected by luck
var numbers = [10, 1, 21, 2];
console.log(numbers);

// to avoid ASCII comparison, need a "compare" function
// the sort uses the comparison result and maps array based on the comparison results
var points = [40, 100, 1, 5, 25, 10];
console.log(points);

points.sort();
console.log(points);

points.sort(function(a, b) {return a-b});
console.log(points);

// quick reverse trick - use b-a instead of a-b