// Foundation
const express = require( 'express' );
const app = express();

// chalk for colors
const chalk = require( 'chalk' );

// set up your logger
const logger = require( 'morgan' );

// Routes

// 1. build a root route that returns 'I am the root route.'
// ( request, response ) => {}
// will use ( req, res ) => {}
app.get( '/', ( req, res ) => {
  res.send( "I am the root route\r" )
});

// 2. build a route for /animals that returns 'I love animals.'
app.get( '/animals', ( req, res ) => {
  res.send( "I love animals" )
});

// 3. build a route for /animals/cats that returns 'I love cats.'
app.get( '/animals/cats', ( req, res ) => {
  res.send( "I love cats" )
});

// 4. build a route for /desserts that returns 'I love desserts.'
app.get( '/desserts', ( req, res ) => {
  res.send( "I love desserts" )
});

// 5. build a route that handles ALL other routes that returns 'Page not found yet.'
// It must be last in the list
app.get( '*', ( req, res ) => {
  res.send( "Page not found!!!" )
});

// Listener
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( chalk.green( `Listening on port ${ chalk.cyanBright( port )}` )));
