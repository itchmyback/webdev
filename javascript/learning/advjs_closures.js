function dog() {
		var dogName = "Hootchie";
}

dog();
// console.log( dogName );
// error: doName is not defined

function dog1() {
	return function announcement() {
		console.log( "My dog's name is " );
	}
}

dog1();
//
// did not execute the return function announcement()

function dog2() {
	return function announcement() {
		console.log( "My dog's name is Hootchie" );
	}
}
var dogNameAnnouncment = dog2();
dogNameAnnouncment();
// My dog's name is Hootchie