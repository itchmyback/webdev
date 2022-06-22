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

// Simple Render
app.get( '/home', ( req, res ) => {
	res.render( 'home' );
})

// Variable path render
app.get( '/demo/:animal', ( req, res ) => {
	// variable 'thing' is set to the variable path via req.params
	// the value will then be sent to 'demo.ejs' variable 'data'
	let thing = req.params.animal;
	res.render( 'demo', { data: thing });
})

// CSS example
app.get( '/demo5/:animal', ( req, res ) => {
	let thing = req.params.animal;
	res.render( 'demo5', { data: thing });
})

// Partials - see the ejs file for partials syntax
app.get( '/demo6/:animal', ( req, res ) => {
	let thing = req.params.animal;
	res.render( 'demo6', { data: thing });
})

// Error for any route not defined, listed last
app.get( '/*', ( req, res ) => {
	res.render( 'error' );
})

// LISTENER
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on port ${ port }` ));