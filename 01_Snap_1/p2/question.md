Write a JavaScript function which will take an array of numbers and return the second highest and second lowest numbers, respectively.

For example: [1,2,3,4,5]
Expected Output : 2,4

// let snapArr = [1, 2, 3, 4, 5];
let snapArr = [100, 22, 3, 4, -5];

function secondEx( arrParam ) {
// assume Array of Numbers
//    points.sort(function(a, b) {return a-b});
//    console.log(points);
    arrParam.sort( function( a, b ) { return a - b });
//     console.log(arrParam);
// second lowest will always be [1]
// second highest will be length minus 1
// oops, maybe try length - 2
console.log(arrParam[1] + ", " + arrParam[arrParam.length - 2]);
}

secondEx( snapArr );