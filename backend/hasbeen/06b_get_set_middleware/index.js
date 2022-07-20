// Foundation
const express = require( 'express' );
const app = express();

//Routes
app.get( '/', ( req, res ) => {
   res.send( "I am groute!!!" );
});

// Middleware with express get and set methods 
// State and Order matter

// SET will populate var 'data'
app.get ( '/cool/:person', ( req, res ) => {
   // like res.send(), but data is target var, not target route
   app.set( 'data', req.params.person );
   res.send( "I got the data! " + req.params.person );
})

// GET will retrieve the var 'data' that was set earlier
// If this route is navigated to before the var is set, it will return "undefined"
app.get( '/gotit', ( req, res ) => {
   res.send( "Yolo " + app.get( 'data' ));
})

// Listener
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `listening on port ${port}` ));