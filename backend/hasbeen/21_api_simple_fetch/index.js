// FOUNDATION
let express = require( 'express' );
let app = express();

app.set( 'view engine', "ejs" );

// look in public folder
app.use( express.static( 'views' ));
app.use( express.static( 'public' ));

// need to install node-fetch
// recall regular fetch is frontend, not backend
// Why do we have a dollar sign here?
const $fetch = require( 'node-fetch' )

// ROUTES

// root
app.get( '/', ( req, res ) => {
    res.send( "I am GROUTE" );
})

// How to render a remote image
// Also, the starting route
app.get( '/home', ( req, res ) => {
 res.render( 'home', { image: 'https://images.dog.ceo/breeds/bouvier/n02106382_952.jpg' })
})

// API -- SIMPLE, NO ERROR HANDLING

// fetch().then( response ).then( data )

// Endpoint is usually a URL to utilize a particular API function
const endpoint = 'https://dog.ceo/api/breeds/image/random'; // correct

// This route will be navigated to from the form submission
app.get( '/getImage', ( req, res ) => {
    // fetch is frontend js, node-fetch is for backend
    $fetch( endpoint ) // go to the endpoint
    // response promise, but "response" is not a keyword for response object
    .then( response => {
        return response.json(); // parse the string
    })  
    // data promise, but "data" is not a keyword for data object
	.then(( data ) => {
		res.render( 'home', { image: data.message });
	})
})

// LISTENER
port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on ${ port }` ));