// Foundation
const express = require('express');
const app = express();

const logger = require('morgan');

//Routes
app.get("/", (req, res) => {
	res.send("I am groute!!!");
});

app.get("/dogs", (req, res) => {
	res.send("I like dogs!!!");
});

app.get("/cats", (req, res) => {
	res.send("I like cats!!!");
});

// TWO variables in path
app.get("/animals/:something/:somethingelse", (req, res) => {
	res.send(`I like ${req.params.something} but I do not like ${req.params.somethingelse}`);
});

// Listener
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
