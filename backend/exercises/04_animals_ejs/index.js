// FOUNDATION

const express = require('express');
const app = express();
const logger = require('morgan');

// public, for use for CSS
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
	res.send("I am groute!!!");
})

app.get('/animals', (req, res) => {
	res.render('animals.ejs');
})

// Want /demo/:animal
app.get('/demo/:animal', (req, res) => {
	// Odd notation
	// thing is assigned to the path variable named animal
	let thing = req.params.animal;
	// data is the response object? after they make a URL request, and thing variable is taken from the {data: value} object
	// data is the contents of the ejs file?
	// NO NO NO - data is the variable name in the ejs page
	// data is the ejs file variable, and it gets assigned a value from the path variable
//	res.render('demo', {thing: thing});
//	res.render('demo', {data: thing});
	res.render('demo.ejs', {data: thing});
})

app.get('/demo/:another', (req, res) => {
	let thing = req.params.animal;
	// fix an issue where we try to send data2 but it dne, so we define an empty string
	// what is this notation at the bottom? is it two objects? what is data2?
	res.render('demo.ejs', {data: thing, data2: ""});
})

app.get('/demo/:doggy', (req, res) => {
	let dog = req.params.animal;
	// If we change key to dog, the variable name in the ejs file must be named "dog"
	// the key dog is the ejs variable dog, the value dog is the path variable dog
	//	res.render('demo.ejs', {dog: dog};

	// So then shorthand can be changed from {dog: dog} to {dog}
	res.render('demo.ejs', {dog});
})

app.get('/demo2', (req, res) => {
	let animals = ["cat", "dog", "possum", "squirrel"];
	// Now, how to send this array to the ejs file?
	// res.render('demo2.ejs');
	res.render('demo2.ejs', {data: animals}); // where data is a variable in ejs file
})

app.get('/demo3', (req, res) => {

	let animals = [
	    {
	      breed: 'dog', 
	      name: 'Spike'
	    },
	    {
	      breed: 'cat', 
	      name: 'Mr Tabby'
	    },
	    {
	      breed: 'bird', 
	      name: 'Tweety'
	    }
	  ]

	res.render('demo3.ejs', {data: animals}); // where data is a variable in ejs file
})

// CSS example
app.get('/demo5/:animal', (req, res) => {
	let thing = req.params.animal;
	res.render('demo5.ejs', {data: thing});
})

app.get('/demo6/:animal', (req, res) => {
	let thing = req.params.animal;
	res.render('demo6.ejs', {data: thing});
})

app.get('/*', (req, res) => {
	res.render('error.ejs');
})

// LISTENING
// const port = profile.env.PORT || 3000;
const port = process.env.PORT || 3000;

// app.listen(port, () => `Listening on port ${port}`);
app.listen(port, () => console.log(`Listening on port ${port}`));
