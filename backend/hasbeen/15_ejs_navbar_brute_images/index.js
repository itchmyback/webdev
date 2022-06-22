// FOUNDATION
const express = require( 'express' );
const app = express();

const logger = require( 'morgan' );

// remove ejs as an extension requirement
app.set( 'view engine', 'ejs' );

// public folder for CSS and assets
app.use( express.static( 'public' ));

// ROUTES

// Root
app.get( '/', ( req, res ) => {
    res.send( "I am GROUTE!!!" );
});

// Home
app.get( '/home', ( req, res ) => {
    res.render ( 'home' ); // shortcut
});

// did not create
/* 
app.get( '/about', ( req, res ) => {
    res.render( 'about' )
});
*/

// LISTENER
const port = 3000 || process.env.PORT;
app.listen( port, () => console.log( `Listening on ${ port }` ));