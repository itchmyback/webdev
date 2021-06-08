// formula from assignment is listed as
// BAC% = (A × 5.14 / W × r) - 0.015 × H
// but based on Widmark formula it probably should be 
// BAC% = (A × 5.14 / W / r) - (0.015 × H)
// will use two objects - drinks and person
// will use a time parameter
function bac( drinks, person, H ) {
	let A = drinks.total * drinks.abv;
	let W = person.weight;
	let r;	
	if( person.sex == "male" ) {
		r = 0.73;
	} else { // person.sex == "female"
		r = 0.66;
	};

	let bac = (A * 5.14 / W / r) - (0.015 * H);
	if ( bac < 0) {
		bac = 0;
	}
	return bac.toFixed( 4 );
}

var bobdrink = { "total": 8, "abv": 0.40 };
var bob = { "sex": "male", "weight": 240 };
console.log( bac( bobdrink, bob, 3 ));
// 0.0489

var piyushdrink = { "total": 12, "abv": 0.05 };
var piyush = { "sex": "male", "weight": 160 };
console.log( bac( piyushdrink, piyush, 6 ));
// -0.636
// well that's not right
// added logic for negative numbers
// 0.0000

var brittanydrink = { "total": 10, "abv": 0.20 };
var brittany = { "sex": "female", "weight": 115 };
console.log( bac( brittanydrink, brittany, 4 ));
// 0.0754