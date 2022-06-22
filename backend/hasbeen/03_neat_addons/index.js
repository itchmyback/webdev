// Foundation
const express = require( 'express' );
const app = express();

// chalk for colors
const chalk = require( 'chalk' );

// ?
const logger = require( 'morgan' );

// Routes
// app.get( route, callback() function )
// es6 notation
app.get( '/', ( request, response ) => {
	response.send( "I am the root route!!!" )
})

// Listener

// app.listen( 3000 )
// Now, we need to specify some ports to listen on - port 3000

// After setting up basic server, we are setting up this environment var
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( chalk.green( `Listening on port ${ chalk.cyanBright( port )}` )));

// logs a lot of stuff
//console.log(app);
