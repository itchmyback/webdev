// stuff - Foundation
const express = require('express');
const app = express();

const logger = require('morgan');

// Routes
app.get("/", (req, res) => {
	res.send("I am groute!!!");
});

app.get("/account", (req, res) => {
	res.send("account is");
});

app.get("/account/:name", (req, res) => {
	res.send(`This account belongs to ${req.params.name}`);
});

app.get("/account/:name/:pay", (req, res) => {
	res.send(`This account belongs to ${req.params.name} and has $${req.params.pay}`);
});

app.get("/account/:name/:num", (req, res) => {
	// Let's destructure
	// Long way
//	let name = req.params.name;
//	let num = req.params.num;

	// or the es6 way
	let {name, num} = req.params;
	res.send(`This account belongs to ${name} and has $${num}`);
});

app.get("/account/name/:name/amount/:num", (req, res) => {
	let {name, amount, num} = req.params;
	if(num > 100) {
		res.send(`${name}, can I borrow ${num/2}?`);
	} else {
		res.send(`${name} do you like living on the edge?`);
	};
});

app.get("/account/name/:name/newamount/:num", (req, res) => {
	let {name, amount, num} = req.params;

	let msg = num > 100 ? `${name}, I hate your ${num}!` : `I hate you ${name}`;
	res.send(msg);
});

// Listen (Listener)
// const port = "dev.env.PORT";
// practice - const port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;

// practice - app.listen(port, () => console.log(`stuff ${port}`));
app.listen(port, () => console.log(`listening on port ${port}`));
