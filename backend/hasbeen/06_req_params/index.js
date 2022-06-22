// Foundation
const express = require( 'express' );
const app = express();

//Routes
app.get( '/', ( req, res ) => {
   res.send( "I am groute!!!" );
});

app.get( '/fruits', ( req, res ) => {
   res.send( "I like fruits!!!" );
});

// variable path with colon
app.get( '/fruits/:fruit', ( req, res ) => {
   // Retrieving the input value of the variable path in the request
   // only object dot notation works for this

   // req and res are parameters of type object
   // params is the value of type object for the req object?
   // but not really b/c can't have objects inside objects and yet?
   // tricky js stuff but it is
//   console.log( req );
   console.log( req.params );
   // { fruit: 'apples' }

   // fruit is the key of the params "object"
   // the value is whatever is inputted in
   console.log( req.params.fruit );
   // apples
      
   res.send( "I like " + req.params.fruit );

});

// TWO variables in path
app.get( '/fruits/:something/:somethingelse', ( req, res ) => {
   res.send( `I like ${ req.params.something }, but I do not like ${ req.params.somethingelse }` );
});

// destructure via es6 output params value
app.get( '/account/:something/:somethingelse', ( req, res ) => {
   let { something, somethingelse } = req.params;
   res.send( `This account belongs to ${ something } and ${ somethingelse }`);
});

// Listener
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `listening on port ${port}` ));
