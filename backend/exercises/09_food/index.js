// FOUNDATION
const express = require('express');
const app = express();

app.set('view engine', "ejs");

app.use(express.static('public'));

const logger = require('morgan');
// app.use(logger, 'dev'); this throws a nasty error
app.use(logger('dev'));

// ROUTES
app.get('/', (req, res) => {
//    res.send("I am GROUTE!!!");
    res.render('home');
})

const yelp = require('yelp-fusion');
const apiKey = "TGmj7XiFfyILe004o67z3COKqqat0-RPorHfIepxlF1mCRCUBSy7gIwcUJaATMMO0c0MIeINi8qbQ44tWt-yYsYk2aWto0n0GrDyjQ0A7Jft5ZV6xRTJDGPNckAgW3Yx";
// const client = yelp.client('YOUR_API_KEY');
// const client = yelp.client('apiKey'); apiKey should not be in quotes
const client = yelp.client(apiKey);

app.get('/locationSearch', (req, res) => {
// code taken from npm
    client.search({
        // remove hardcoded
//	    term: 'Four Barrel Coffee',
//	    location: 'san francisco, ca',
        // note in object form - key is from label name = locale
        // where is location from? it's an argument to the api (see documentation)
        location: req.query.locale,
        limit: 10
	}).then(response => {
	    let results = response.jsonBody.businesses[0].name;
	    console.log(response.jsonBody.businesses[0].name);
        let moreresults = response.jsonBody.businesses; // get the value as an array of data 
//        res.send(results); // recall - req/res cycle ends with send
        res.render('results', {data: moreresults});
	}).catch(e => {
	    console.log(e);
	});
    // res.send('location search'); this won't work b/c req/res has ended
})


// LISTENER
const port = 3000 || process.env.PORT;
// app.listen(port, () => (`Listening on ${port}`));
app.listen(port, () => console.log(`Listening on port ${port}`));