// Foundation
const express = require('express');
const app = express();

const logger = require('morgan');

//Routes
app.get("/", (req, res) => {
	res.send("I am groute!!!");
});

app.get("/fruits", (req, res) => {
	res.send("I like fruits!!!");
});

// variable path with colon
app.get("/fruits:fruits", (req, res) => {
	// req and res are parameters of type object
	// params is the value of type object for the req object
	// fruit is the value of the params object
	console.log(req.params.fruit);
		
	res.send("I like " + req.params.fruit);
});

// Listener
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
