// FOUNDATION
const express = require( 'express' );
const app = express();

const logger = require( 'morgan' );

// ejs doesn't need require(), but does need a 'views' filder
// Can use view engine to avoid typing out ".ejs" extension
app.set('view engine', "ejs");

// public, for use for CSS
app.use( express.static( 'public' ) );

// ROUTES
app.get( '/', ( req, res ) => {
	res.send( "I am groute!!!" );
})

// More complicated variables - Collections
// see the ejs files for ejs syntax

// render Array
app.get( '/array', ( req, res ) => {
	let animals = [ "cat", "dog", "possum", "squirrel" ];

	res.render( 'array', { data: animals }); // where data is a variable in ejs file
})

// render Object
app.get( '/object', ( req, res ) => {
	let animals = [
	    {
	      breed: 'dog', 
	      name: 'Spike'
	     },
	    {
	      breed: 'cat', 
	      name: 'Mr Tabby'
	     },
	    {
	      breed: 'bird', 
	      name: 'Tweety'
	     }
	  ]

	res.render( 'object', { data: animals }); // where data is a variable in ejs file
})

app.get( '/*', ( req, res ) => {
	res.render( 'error' );
})

// LISTENER
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on port ${ port }` ));