const animals = require('animals');
const logpets = require('log.pets');

console.log(animals());
console.log(animals());
console.log(animals());

logpets.lion();

logpets.zoo(animals(), animals(), animals());


console.log("\n" + "The number of animals is: " + animals.words.length);

function countG() {
	gAnimalsArr = [];

	animals.words.forEach( (animal) => {
		if(animal.match(/^G/i)) {
			gAnimalsArr.push(animal);
		} // end if
	}) // end forEach

	if(gAnimalsArr.length == 0) {
		console.log("Error: no animals that start with 'G'");
	} else {
		console.log("The number of animals that start with 'G' is: " + gAnimalsArr.length);
	} // end if/else
	
} // function

countG();
