const pokemon = require('pokemon');

let poke = pokemon.random();

console.log(poke);

let pokeArray = [];

for(let i = 0; i < 5; i++) {
// This will return the same value because random() was only run once
//   pokeArray.push(poke);
   pokeArray.push(pokemon.random());
}

console.log(pokeArray);