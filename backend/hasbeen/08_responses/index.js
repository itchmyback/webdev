// Foundation
const express = require( 'express' );
const app = express();

// set up logger
const logger = require('morgan');
// app.use(logger('dev'));

const pokemon = require('pokemon');

// Routes

app.get( '/', ( req, res ) => {
   res.send( 'I am the groot!!!' )
});

// different response types - send, json, redirect, end, status
// Note - send and json end the response, so what is the point of end?
// Read On

// Send  - for text
app.get( '/text', ( req, res ) => {
   res.send( "I am the text route" )
});

// Json - for json
app.get( '/json', ( req, res ) => {
   res.send( "I am the json route" )
});

// Redirect
// note - the displayed browser URL will show the new route
app.get( '/surprise', ( req, res ) => {
   res.send( "SURPRISE" )
});

app.get( '/tricked', ( req, res ) => {
   res.redirect( '/surprise' )
});

// End - for ending without sending data
app.get( '/console', (req, res) => {
   console.log( "I am the console" )
   res.end()
});

// Pokemon Module - send processed data
app.get('/pokemon', (req, res) => {
  // res.send( "POKEMON GOTTA CATCH EM ALL" )

  // Build an array of 5 random pokemon
   var pokeArray = []
   for(let i = 0; i < 5; i++) {
      pokeArray.push( pokemon.random() );
   }
   // Using the map method, create a new array of pokemon encased in <p> tags
   let result = pokeArray.map( (el) => {
      return `<p>${ el }</p>`;
   });
   console.log( result );
   res.send( result.join('') );
});

// All else - last in list
app.get( '*', ( req, res ) => {
   res.status( 404 ).end()
});

// Listener
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on port ${ port }` ));
