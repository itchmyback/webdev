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
const baseUrl = 'https://api.lyrics.ovh/v1';

// REQUEST - this app will use Request (vs Node-Fetch or Needle)
// documentation says request is deprecated
const request = require('request');

  // steps for http request
  // making a request using endpoint
  // receive a response - generally json
    // parse it!!!
  // do something
  // error handling


// ROUTES

// home route
app.get('/', (req, res) => {
  res.render('home');
})

// getbitcoinprice route
app.get('/getbitcoinprice', (req, res) => {
	const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
//	console.log(req);
	// for input = 23, output is
	/*
	params: {},
  	query: { price: '23' },
	*/
//  	console.log(req.query);
	// { price: '23' }

  // The way request works -
  // positional arguments
  request(endpoint, (error, response, body) => {
    if(!error && response.statusCode == 200) {
	    // convert to JSON
	    // return response.json()
	    let parsedData = JSON.parse(body); // use with request and needle
//	    console.log(parsedData); // make sure it's okay
		// output
		/*
		{ time: {}, disclaimer: '', chartName: '', bpi: { USD: {}, GBP: {}, EUR: {} } }
		*/
//		console.log(parsedData.bpi);
		// output
		/*
		{ USD: {}, GBP: {}, EUR: {} }
		*/
//		console.log(parsedData.bpi.USD);
		// output
		/*
		{ code: 'USD', ... , rate_float: 50346,1311 }
		*/
		let usdprice = parsedData.bpi.USD.rate_float; // an object
		// get value from usdprice object
		res.render('bitcoin', {usdprice});
//	    res.render('bitcoin', {data});
//	    res.render('results', {data, artist, title});
    } else {
      res.render('error', {error: "No lyrics found"});
    }
  })
  // res.render('bitcoin');
})

// old routes
app.get('/getLyrics', (req, res) => {
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
  res.render('results');
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
