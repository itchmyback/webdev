// FOUNDATION
const express = require( 'express' );
const app = express();

const logger = require( 'morgan' );

// remove ejs as an extension requirement
app.set( 'view engine', 'ejs' );

// public folder for CSS and assets
app.use( express.static( 'public' ));

// Slick Method - use ejs with JS Control Structures to iteratively contruct rendered content, modularly

// To modularize the navbar links/images, import a helper data file with modular info
// ./helpers/projectData.js => exports.data object
// import with const data = require( './helpers/projectData' );
// Recall object key is named 'data'
// So to do es6 deconstruction on import object, must use object key name of 'data'

const { data } = require( './helpers/projectData' );
console.log( data );

// ROUTES
// Root
app.get( '/', ( req, res ) => {
    res.send( "I am GROUTE!!!" );
});

// Home
app.get( '/home', ( req, res ) => {
// Here, { data refers to the ejs variable on the home page while data } refers to the array of objects value }
    // res.render( 'home', { data: data });
    res.render ( 'home', { data }); // shortcut
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