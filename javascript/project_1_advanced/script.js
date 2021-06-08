// arrays are the same size and not empty
// by definition, the array is ordered, do not sort
// scoring: +4 per match, -1 per mismatch, 0 per blank test array cell
function gradeTest( testArr, answerArr ) {
	let score = 0;
	for( var i = 0; i < testArr.length; i++ ) {
		if( testArr[i] == "" ) {
		} else if( testArr[i] == answerArr[i]) {
			score = score + 4;
		} else {
			score = score - 1;
		}
	}
	return score;
}

var arr0 = ["a", "b", "c", "d"];
var arr1 = ["a", "b", "c", "d"];
console.log( gradeTest( arr0, arr1 ));
// expect 16

var arr2 = ["b", "b", "b", "b", "b", "b"];
var arr3 = ["a", "b", "c", "d", "a", "a"];
console.log( gradeTest( arr2, arr3 ));
// expect -1

var arr4 = ["", "", "", "", "", ""];
var arr5 = ["a", "b", "c", "d", "a", "a"];
console.log( gradeTest( arr4, arr5 ));
// expect 0 

var arr6 = ["", "b", "", "b", "b", "a"];
var arr7 = ["a", "b", "c", "d", "a", "a"];
console.log( gradeTest( arr6, arr7 ));
// expect 6 