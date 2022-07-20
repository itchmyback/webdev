// Foundation
const express = require( 'express' );
const app = express();

//Routes
app.get( '/', ( req, res ) => {
   res.send( "I am groute!!!" );
});

// This route doesn't match because params yourname isn't defined yet.
// Hence, req.yourname is not defined either.
app.get ( '/icomeinpeace', ( req, res ) => {
   res.send ( `I come before "no name" ${ req.yourname }`);
})

// see below, but this placement doesn't matter`
app.get ( '/crazy/:yourname', ( req, res ) => {
   res.send ( `I'm crazy, ${ req.params.yourname }. ${ req.yourname }`);
})

// express params - pre-process params value with express.param() - middleware functionality
// expect variable path parameter to be 'yourname'
app.param( 'yourname', ( req, res, next, yourname ) => { 
   let newName = yourname + " you jackass";
   console.log ( newName );
   // yourname is also property of req now, in addition to req.params
   // new param will update variable value from URL params
   req.yourname = newName;

   // what does next() do? It passes control to the next matching route
   // In this case, app.param() isn't really a route?
   // However, without next(), the route in question (see below) will hang
   // Probably because it calls "yourname" which is still being processed

   // probably need a next() middleware module

   // Based on trial and error, "next matching route" means "any matching route" that can use the req.var
   // The order or placement doesn't matter. It can come before or after the declaration
   // of the param middleware.

   next();
}) ;

// Is this a matching route?
// No - this doesn't do anything. Matching means anything that calls a defined req.var
app.get ( '/yourname', ( req, res ) => {
   res.send ( "I got nothing here." );
})

// route will contain the "req.params.yourname" and the modified "req.yourname"
// This route matches because req.params.yourname will initialize req.yourname,
// based on the middleware definition

// also remember, variables routes are tricky if they are upstream b/c they'll match first
// /:yourname => /base/:yourname
app.get ( '/base/:yourname', ( req, res ) => {
   res.send ( `I can't believe it, ${ req.params.yourname }. ${ req.yourname }`);
})

// This also is undefined and not matching, regardless of actual position in the route list
// because the route must contain any data the middleware requires. It doesn't have req.params.var
app.get ( '/yougoinpieces', ( req, res ) => {
   res.send ( `Goodbye ${ req.yourname }`);
})

// Listener
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `listening on port ${port}` ));