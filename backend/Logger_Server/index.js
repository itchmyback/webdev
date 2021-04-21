// Foundation
const express = require('express');
const app = express();

// installed morgan and chalk, some helper packages
const logger = require('morgan');
const chalk = require('chalk');

// morgan
// app.use(logger()); looking inside morgan to see arguments -- needs 'dev' argument?
chalk.yellow(app.use(logger('dev')));

// chalk - for color coding

// Routes
app.get('/', (req, res) => {
	res.send("I am groute!!!")
});

// route handling for /shar
app.get('/shar', (req, res) => {
	res.send("This is Shar's page")
});

// route handling for /veggie
app.get('/veggies', (req, res) => {
	res.send("This is veggies")
});

let fruits = ["bananas", "cherries", "limes", "watermelon"];

// route handling for /fruits
app.get('/fruits', (req, res) => {
	res.send(fruits)
});

// route handling for /fruits/cherries
app.get('/fruits/cherries', (req, res) => {
	res.send("I like cherries")
});

// route handling to display req object
app.get('/reqqer', (req, res) => {
	console.log(req);
});

// Listener
const port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`listening on port ${port}`));

// chalk goes here - redo app.listen
app.listen(port, () => console.log(chalk.yellow(`listening on port ${port}`)));
