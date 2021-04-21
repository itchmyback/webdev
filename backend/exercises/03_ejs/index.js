// Foundation
const express = require('express');
const app = express();

const logger = require('morgan');

// ejs doesn't need a require
// ejs must have a views folder


// Routes

app.get('/', (req, res) => {
	res.send("I am groute!!!");
});

// From ejs file
app.get('/home', (req, res) => {
	res.render('home.ejs');
});

app.get('/contact', (req, res) => {
	res.render('oontact.ejs');
});

app.get('/about', (req, res) => {
	res.render('about.ejs');
});

// Listener
const port = process.env.PORT || 3000;

// app.listen(port, () => `Listening on port ${port}`);
app.listen(port, () => console.log(`Listening on port ${port}`));
