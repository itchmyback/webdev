// FOUNDATION
let express = require( 'express' );
let app = express();

app.set( 'view engine', "ejs" );

// look in public folder
app.use( express.static( 'views' ));
app.use( express.static( 'public' ));

// ROUTES

// root
app.get( '/', ( req, res ) => {
    res.send( "I am GROUTE" );
})

// How to render a remote image
/*
app.get( '/home', ( req, res ) => {
 res.render( 'home', { image: 'https://www.austincc.edu/sites/default/files/components/images/20220325-HLC-Staged-Shoot-ca-581w.-imgcap-1.jpg' })
})
*/

// Initial image
/*
app.get( '/home', ( req, res ) => {
    res.render( 'home' )
})
*/

// base image URL, need to update index in the ejs file
app.get( '/getImage', ( req, res ) => {
    let baseUrl = 'https://www.austincc.edu/sites/default/files/components/images/20220325-HLC-Staged-Shoot-ca-581w.-imgcap-'
 res.render( 'home', { baseUrl })
})

// LISTENER
port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on ${ port }` ));
