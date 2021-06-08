// FOUNDATION
const express = require( 'express' );
const app = express();

// needle
const need = require( 'needle' );

// views
app.set( 'view engine', "ejs" );
app.use( express.static( 'public' ));

const logger = require( 'morgan' );
const needle = require('needle');
// app.use( logger, 'dev' ); this throws a nasty error
app.use( logger( 'dev' ));

// ROUTES
app.get( '/', ( req, res ) => {
//    res.send( "I am GROUTE!!!" );
//    res.render( 'index' );
// Need to initialize empty cards array
    res.render( 'index', { cards: [] });
});

// endpoint

let endpoint = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5';

// deal - check the trigger
app.get( '/deal', ( req, res ) => {
    // promise buying? deal with asynchronous aspect
    // not following what the issue is, maybe using get even thought we're not getting
    // what goes in callback function?
    // also recall, a callback function is like an inner function
    // JM says generally there are 2 arguments - response, error
//    needle.get(endpoint, ( response, error ) => {
    // JM tricked us, should be error, response
//    needle.get(endpoint, ( error, response ) => {
    needle.get( endpoint, ( error, data ) => {
        /*
        // console.log( data.body.cards );
        // what's wrong with the below line?
        // res.send(data)
        // moving on, we added a button to the public index.ejs
        res.render( 'index', { cards: data.body.cards } );
        // now go back to index.ejs file to receieve index
        // ISSUE: cards doesn't exist because it gets generated in the root route
        // So need to initialized
        */
       // Now add in error handling
        if( !error && data.statusCode == 200 ) {
        res.render( 'index', { cards: data.body.cards } )
        } else {
            res.send('error');
        }
    })
    // res.end(); // don't need this because render() will end
})

/*
const yelp = require( 'yelp-fusion' );
const apiKey = "TGmj7XiFfyILe004o67z3COKqqat0-RPorHfIepxlF1mCRCUBSy7gIwcUJaATMMO0c0MIeINi8qbQ44tWt-yYsYk2aWto0n0GrDyjQ0A7Jft5ZV6xRTJDGPNckAgW3Yx";
// const client = yelp.client( 'YOUR_API_KEY' );
// const client = yelp.client( 'apiKey' ); apiKey should not be in quotes
const client = yelp.client( apiKey );

app.get( '/locationSearch', ( req, res ) => {
// code taken from npm
    client.search( {
        // remove hardcoded
//	    term: 'Four Barrel Coffee',
//	    location: 'san francisco, ca',
        // note in object form - key is from label name = locale
        // where is location from? it's an argument to the api ( see documentation )
        location: req.query.locale,
        limit: 10
	}).then( response => {
	    let results = response.jsonBody.businesses[0].name;
	    console.log( response.jsonBody.businesses[0].name );
        let moreresults = response.jsonBody.businesses; // get the value as an array of data 
//        res.send( results ); // recall - req/res cycle ends with send
        res.render( 'results', {data: moreresults} );
	}).catch( e => {
	    console.log( e );
	});
    // res.send( 'location search' ); this won't work b/c req/res has ended
})
*/

// LISTENER
const port = 3000 || process.env.PORT;
// app.listen( port, () => ( `Listening on ${port}` ));
app.listen( port, () => console.log( `Listening on port ${port}` ));
