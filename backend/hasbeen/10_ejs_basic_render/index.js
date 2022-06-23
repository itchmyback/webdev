// Foundation
const express = require( 'express' );
const app = express();

const logger = require( 'morgan' );

// embedded js (ejs) package installed
// However, ejs doesn't need a require
// But, ejs must have a 'views' folder

// Routes
app.get( '/', ( req, res ) => {
	res.send( "I am groute!!!" );
});

// From ejs files in views folder
// 3 files - home, about, bare_html
app.get( '/home', ( req, res ) => {
	res.render( 'home.ejs' );
});

app.get( '/about', ( req, res ) => {
	res.render( 'about.ejs' );
});

// This file will demo how bare html elements can be rendered in ejs without an html or body tags.
// Again, this is due to the HTML spec not requiring those element tags.
app.get( '/bare_html', ( req, res ) => {
	res.render( 'bare_html.ejs' );
});

// Listener
const port = process.env.PORT || 3000;

// app.listen(port, () => `Listening on port ${port}`);
app.listen(port, () => console.log( `Listening on port ${port}` ));
