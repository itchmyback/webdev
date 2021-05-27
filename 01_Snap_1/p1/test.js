// P1 
// var myStr = ""
// for ( let i = -10; i <= 10; i++ ) {
// //    console.log( i );
// //    let myArr =  [0, 1 ,2];
//     if( i % 3 != 0 ) {
//         myStr = myStr.concat( " " + i.toString() );
//     }
// //    myStr = myStr.concat( i );
// };
// console.log( myStr );


// P2
// let snapArr = [1, 2, 3, 4, 5];
// // let snapArr = [100, 22, 3, 4, -5];

// function secondEx( arrParam ) {
// // assume Array of Numbers
// //    points.sort(function(a, b) {return a-b});
// //    console.log(points);
//     arrParam.sort( function( a, b ) { return a - b });
// //     console.log(arrParam);
// // second lowest will always be [1]
// // second highest will be length minus 1
// // oops, maybe try length - 2
// console.log(arrParam[1] + ", " + arrParam[arrParam.length - 2]);
// }

// secondEx( snapArr );


// P3
var snapSentence = "A quick brown fox jumps over the lazy dog";

function longestWord( strParam ) {
    let wordArr = strParam.split( " " );
    console.log( wordArr );
};

longestWord(snapSentence);