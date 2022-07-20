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

// API
// Endpoint is usually a URL to utilize a particular API function
// const endpoint = 'https://dog.ceo/api/breeds/image/random'; // correct
// const endpoint = 'https://yodog.ceo/api/breeds/image/random'; // bad domain
const endpoint = 'https://images.dog.ceo/breeds/bouvier/n02106382_666.jpg'; // bad page

// FETCH
// a mostly good article https://dev.to/anchobies/when-that-s-not-so-fetch-error-handling-with-fetch-4cce

// Error Handling
app.get( '/badError', ( req, res ) => {
//    $fetch( 'https://www.supblah.com' ) // actually gives a network error since domain server doesn't exist
    $fetch( 'https://www.costco.com/crappy' ) // assume a 404 error, but holy crap default timeout might be 300 seconds
    .then( res => res.json()) // no error is thrown
    .then(() => console.log( "Success" )) // so we get this instead of error
    .catch(() => console.log( "Error" )) // fails to catch many errors, does catch network errors
})

// How to handle errors like 404? Use response.ok to check for HTTP status between 200 - 299
// Use if/then to process

// This route will be navigated to from the form submission
app.get( '/getImage', ( req, res ) => {
    // fetch is frontend js, node-fetch is for backend
    $fetch( endpoint ) // go to the endpoint
    // response promise, but "response" is not a keyword for response object
    .then( response => {
        // if ok - this json ( string )
        if( response.ok ) {
            return response.json(); // parse the string
        // else if not ok (like a 404), throw error
        } else {
//            res.render( 'error', { error: "4 OH 4" });
            throw Error( "Rasheedat broke it!!!!" ) // What is supposed to happen here? Without a render page, the catch block renders.
        }
    })  
    // data promise, but "data" is not a keyword for data object
	.then(( data ) => {
		res.render( 'home', { image: data.message });
	})
    // catch - "err" is not a reserved keyword
    // this will catch network errors, so putting in a bad URL will trigger the catch
	.catch(( err ) => { 
        res.render( 'error', { error: "Something doggone funny happened!" });
	})
})

// LISTENER
port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on ${ port }` ));
