var marvel = require('marvel-characters')

console.log(marvel())

var heroArray = marvel.characters

// console.log(heroArray)

console.log("The number of heroes is: " + heroArray.length)

var manHero = [];

for(var i=0; i < heroArray.length; i++) {
	if(heroArray[i].match(/^Man/g) != null) {
		manHero.push(heroArray[i]);
//		console.log(heroArray[i].toString());
// This doesn't work because array indices are not in sync
//		console.log(manHero[i]);
	}
} // end for
	
if(manHero.length == 0) {
	console.log("No heroes match 'man'");
} else {
	manHero.forEach(hero => {
		console.log(hero);
	})
} // end else

// let's build a search function - for exact matches

console.log("\nNeed a break\n");

function searchExactHero(searchStr) {
	var foundHero = false;

	for(var i=0; i < heroArray.length; i++) {
		if(heroArray[i] == searchStr) {
			console.log(heroArray[i]);
			foundHero = true;	
		} // end if
	} // end for
		
	if(!foundHero) {
		console.log(`'${searchStr}' not found`);
	}
} // end function

searchExactHero("Iron Man");

searchExactHero("Batman");
