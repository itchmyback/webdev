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
// The image URL is passed in as a variable to the ejs file
// img src="<% image %>"
app.get( '/home', ( req, res ) => {
 res.render( 'home', { image0: 'https://images.dog.ceo/breeds/bouvier/n02106382_952.jpg', image1: 'https://www.austincc.edu/sites/default/files/components/images/20220325-HLC-Staged-Shoot-ca-581w.-imgcap-1.jpg' })
})

// LISTENER
port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on ${ port }` ));