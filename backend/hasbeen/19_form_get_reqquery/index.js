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

// home page - input a number
app.get( '/home', ( req, res ) => {
    res.render( 'home' )
})

// route to send image URL components - baseUrl and index number retrieved from form
app.get( '/getImage', ( req, res ) => {
    // base image URL, need to update index in the ejs file
    // let baseUrl = 'https://www.austincc.edu/sites/default/files/components/images/20220325-HLC-Staged-Shoot-ca-581w.-imgcap-';
    let baseUrl = 'https://www.fwweekly.com/wp-content/uploads/2022/01/image';

    let numindex = 1;
    // retrieve variable sent by Form via HTTP GET method with req.query
    console.log( req.query );

    // req.query.numindex parses the URL query for a variable named 'number'
    numindex =  req.query.number;
    res.render( 'getImage', { baseUrl, numindex })
})

// LISTENER
port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on ${ port }` ));
