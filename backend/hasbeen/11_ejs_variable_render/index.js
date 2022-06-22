// FOUNDATION
const express = require( 'express' );
const app = express();

const logger = require( 'morgan' );

// ejs doesn't need require(), but does need a 'views' filder
// Can use view engine to avoid typing out ".ejs" extension
// app.set('view engine', "ejs");

// public, for use for CSS
app.use( express.static( 'public' ) );

// ROUTES
app.get( '/', ( req, res ) => {
	res.send( "I am groute!!!" );
})

// Simple Render
app.get( '/home', ( req, res ) => {
	res.render( 'home.ejs' );
})

// Render with ejs variable, dynamic
app.get( '/johnny', ( req, res ) => {
	// define variable
	let thing = "HEY DUDE my name is Johnny";

	res.render( 'johnny.ejs', { data: thing });
	// What's happening here?
	// the target ejs file to render is named 'johnny.ejs'
	// info is passed into the ejs file, in the format of an object
	// the object key, 'data', is the name of an ejs variable inside the ejs file
	// ie inside the ejs file would be something like <%= data %>
	// the object value is 'thing', which in this case is a variable defined in the route

	// NOTE - this example is not really that dynamic, but it showcases the dynamic nature
	// of rendering a webpage with variable content

	// EJS - templating of HTML using JavaScript via JavaScript XML (JSX) for dynamic webpages from the backend
})

// LISTENER
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on port ${ port }` ));