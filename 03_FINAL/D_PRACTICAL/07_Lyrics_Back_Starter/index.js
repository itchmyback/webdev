// FOUNDATION
const express = require('express');
const app = express();

const chalk = require('chalk');
const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

// API
//  https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime
// const baseUrl = 'https://api.lyrics.ovh/v1';
const baseUrl = 'https://api.giphy.com/v1/gifs/search';
const api_key = "73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS";

// giphy endpoint
// api.giphy.com/v1/gifs/search
// request parameters - these are query parameters, not params parameters
// api_key = 
// &q search string parameter

// so request needs to be installed
const request = require('request');

// ROUTES
app.get('/', (req, res)=>{
  res.render('home');
})

app.get('/getGiphy', ( req, res ) => {
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
	// hardcode debug
	let endpoint = 'https://api.giphy.com/v1/gifs/search?q=chonk&api_key=73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS&limit=1';
	
	request(endpoint, (error, response, body) => {
    // previously assumed no errors, now will handle error
    if(!error && response.statusCode == 200) {
	    // convert to JSON
	    // return response.json()
	    let gifobj = JSON.parse(body); // use with request and needle
	    console.log(gifobj); // make sure it's okay
		// gifobj = { data: [{}] }
		// Want to get url which is buried inside gifobj
		let { data } = gifobj; // would return an array of objects, data for the gif
		let myurl = data[0].url;
		console.log( "hopefully the url string is " + myurl );
		

	    // parsedData.lyrics - object dot notation - will give lyrics
	    // then use regex to remove new lines
	    // let data = parsedData.lyrics;
	    // let data = parsedData.lyrics.replace(/\n/g, "<br>");

//	    res.render('results', {data, artist, title});
		res.render( 'results', { data });
    } else {
      res.render('error', {error: "ERROR"});
    }
  })
})

// This route is not gone to directly
// This route is called from home
// This is why the variables "artist" and "title" appear in the query, because they are called from the home page
// which is also calling getLyrics route
app.get('/getLyrics', (req, res)=>{
  console.log(req);
  // output is
  /*
  params: {},
  query: { artist: '1', title: '3' },
  res: <ref *3> ServerResponse {
    _events: [Object: null prototype] {
      finish: [Array],
      end: [Function: onevent]
    },
  */
  // It's query (versus params) based on input method, in this case the form submit buttons
  console.log(req.query.title);
  res.render('example');
})

app.get('/getMoreLyrics', (req, res) => {
  // destructure
  let {title, artist} = req.query;

  // this is the full API URL
  let endpoint = `${baseUrl}/${artist}/${title}`;

  // request, instead of fetch or needle, needs to be installed - makes http request

  // steps for http request
  // making a request using endpoint
  // receive a response - generally json
    // parse it!!!
  // do something
  // error handling

  // The way request works -
  // positional arguments
  request(endpoint, (error, response, body) => {
    // previously assumed no errors, now will handle error
    if(!error && response.statusCode == 200) {
	    // convert to JSON
	    // return response.json()
	    let parsedData = JSON.parse(body); // use with request and needle
	    console.log(parsedData); // make sure it's okay
	    // parsedData.lyrics - object dot notation - will give lyrics
	    // then use regex to remove new lines
	    // let data = parsedData.lyrics;
	    let data = parsedData.lyrics.replace(/\n/g, "<br>");
	    // res.render('results', {data});
	    res.render('results', {data, artist, title});
    } else {
      res.render('error', {error: "No lyrics found"});
    }
  })

//  res.render('results');
})

// LISTENER
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.blue(`App on port: ${chalk.green(port)}`)));
