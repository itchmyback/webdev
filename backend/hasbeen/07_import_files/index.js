// Foundation
const express = require( 'express' );
const app = express();

// Import file
// The target file, data.js, has an export statement - exports.data
// The contents of data.js are { data: "Yo man what's up!" }
// The file name and object key have the same name (coincidence, not required), which is certainly confusing
// And then the object name could also have the same name, even more confusing

// The file content is exported as an object
// Object not named until declared with require() import

// Could export into object named data, but that's just confusing, so instead importing into object named data_obj
//const data = require( './data.js' );
const data_obj = require( './data.js' );

console.log( data_obj );
console.log( "bracket:", data_obj[ "data" ] );
console.log( "dot:", data_obj.data );

// Or import object value with es6 destructure call
const { data } = require( './data.js' );

console.log( "destructure: ", data );

//Routes
app.get( '/', ( req, res ) => {
   res.send( "I am groute!!!" );
});

// Listener
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `listening on port ${port}` ));
