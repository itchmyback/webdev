// FOUNDATION
const express = require('express');
const app = express();

const chalk = require('chalk');
const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

// so request needs to be installed
const request = require('request');

// API

// giphy endpoint
// api.giphy.com/v1/gifs/search
// request parameters - these are query parameters, not params parameters
// api_key = 
// &q search string parameter
const baseUrl = 'https://api.giphy.com/v1/gifs/search';
const api_key = "73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS";

// ROUTES
// Home - Trending API
app.get( '/', ( req, res ) => {
	// borrow API format from Search API below
	let endpoint = 'https://api.giphy.com/v1/gifs/trending?api_key=73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS&limit=25';

	request( endpoint, ( error, response, body ) => {
	    if( error || response.statusCode != 200 ) {
			res.render( 'error', { error: "ERROR" });
		} else {
			// borrow from Search API below
			// IT WORKS! Now let's query 25
			// Store in an array, so when we pass image now, it will be an array
			// The rendered page will have to parse
		    let gifobj = JSON.parse( body ); // use with request and needle
			let { data } = gifobj; // would return an array of objects, data for the gif
			/*
			let { images } = data[0];
			let image = images.downsized.url;
			*/
			let image = []; // size will be 25
			for( let i = 0; i < data.length; i++ ) {
				image[i] = data[i].images.downsized.url;
				// console.log( image[i] );
			}
			res.render( 'home', { image });
			// 25 image array works!
	    }
	}) // end request

}) // end Home

// Search
app.get('/search', (req, res)=>{
  res.render('search');
})

// Search API
app.get('/searchGiphy', ( req, res ) => {
	// destructure q key from query object
	let { q } = req.query;

	// full endpoint
	// braces are not objects, it's part of template literal notation
	// example from online
	// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");

	// from react tmdb
	/*
	let keys = { tmdb_api_key: "801f26d3492413889e17ba540499f4bd" };
	const url = 'https://api.themoviedb.org/3';
	const movieRoute = `/search/movie?api_key=${keys.tmdb_api_key}&query=${searchTerm}`;
	*/

	// let endpoint = `${ baseUrl }/${ q }/&api_key=${ api_key }`;
	// Can't get to work, so hard coding for debug
	// let endpoint = 'https://api.giphy.com/v1/gifs/search?q=chonk&api_key=73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS&limit=25';
	let endpoint = 'https://api.giphy.com/v1/gifs/search?q=`${q}`&api_key=73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS&limit=25';
	
	request(endpoint, (error, response, body) => {
    // previously assumed no errors, now will handle error
    if(!error && response.statusCode == 200) {
	    // convert to JSON
	    // return response.json()
	    let gifobj = JSON.parse(body); // use with request and needle
	    console.log(gifobj); // make sure it's okay
		/*
		// gifobj = { data: [{}] }
		// Want to get url which is buried inside gifobj
		let { data } = gifobj; // would return an array of objects, data for the gif
		let myurl = data[0].url;
		console.log( "hopefully the url string is " + myurl );
		// success!
		// NO, this url is not usable, have to get a publicly accessible url
		*/
		// gifobj = { data: [{ images: Object }] }
		// The url property isn't valid, so have to go even deeper to get the public url
		let { data } = gifobj; // would return an array of objects, data for the gif
		// Above, demonstrated query and parse of multiple URLs, so implement here
		/*
		let { images } = data[0];
//		console.log( images );
		let image = images.downsized.url;
//		console.log( "hopefully the url string is " + image );
		*/
		let image = []; // size will be 25
		for( let i = 0; i < data.length; i++ ) {
			image[i] = data[i].images.downsized.url;
		}
		res.render( 'results', { image });
    } else {
      res.render('error', {error: "ERROR"});
    }
  })
})

// LISTENER
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.blue(`App on port: ${chalk.green(port)}`)));
