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

// Render with ejs variable
app.get( '/johnny', ( req, res ) => {
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

// Render variable paths - variable into req.params.<varpath> to use as dynamic content

app.get( '/demo/:animal', ( req, res ) => {
	// variable 'thing' is set to the variable path via req.params
	// the value will then be sent to 'demo.ejs' variable 'data'
	let thing = req.params.animal;
	res.render( 'demo.ejs', { data: thing });
})

// not sure what the point is here
app.get( '/demo1/:another', ( req, res ) => {
	let thang = req.params.animal;
	// fix an issue where we try to send data2 but it dne, so we define an empty string
	// what is this notation at the bottom? is it two objects? what is data2?
	res.render( 'demo.ejs', { data: thang, data2: "" });
})

// shorthand render object
app.get( '/pet/:animal', ( req, res ) => {
	let dog = req.params.animal;
	// If we change key to dog, the variable name in the ejs file must be named "dog"
	// the key dog is the ejs variable dog, the value dog is the path variable dog
	//	res.render( 'demo.ejs', { dog: dog };

	// So then shorthand can be changed from { dog: dog } to { dog }
	res.render( 'pet.ejs', { dog });
})

// LISTENER
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on port ${ port }` ));