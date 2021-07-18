const mySchool = { name: "ACC", place: "Austin", awesome: true };

// var must match key
let { name } = mySchool;
// This is the same as let name = mySchool.name

console.log( name );
// ACC

let { place, awesome } = mySchool;
console.log( "Is " + place + " awesome? " + awesome );
// Is Austin awesome? true

/*
import { data } from './objects_3_data.js';
console.log( data );
*/