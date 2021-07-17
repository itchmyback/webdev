// shallow vs deep copy
var person = {
	age: 28,
	address: { lucky: 55 }
}
console.log( "person:", person );

var person2 = { ...person };
person2.age = 30;
person2.address.lucky = 66;
console.log( "person2:", person2 );
console.log( "changing lucky for shallow copy person2 also changes it for person1, in real time" );

var person3 = JSON.parse( JSON.stringify( person ));
person3.age = 40;
person3.address.lucky = 88;
console.log ( "person3:", person3 );
console.log ( "person:", person );
console.log( "changing lucky for deep copy person3 doesn't changes it for person1 or person2" );
