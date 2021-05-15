// FOUNDATION
const express = require('express');
const app = express();

app.set('view engine', "ejs");

app.use(express.static('public'));

const logger = require('morgan');
// app.use(logger, 'dev'); this throws a nasty error
app.use(logger('dev'));

// UPDATE -- bodyParser is indeed integrated directly into express and is called through express

// So bodyparser doesn't need to be required
// // try to use bodyparser that comes with express, else install it
// const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
// urlencoded allows special characters to be decoded from encoded URL
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json());
app.use(express.json());


// import object from fakeData.js can also just use ./fakeData
// toDoArray: array_of_objects
const {toDoArray} = require('./fakeData.js');


// * CRUD - Create, Read, Upate, Delete


// ROUTES

// Add this so we load the index from the client directory
// This replaces the root route
// .static must be an autoload, because it's used with /views and /public
app.use(express.static('../client'));

/*
app.get('/', (req, res) => {
	// console.log(toDoArray);
    res.send("I am GROUTE!!!");
//    res.render('home');
})
*/

// Read - GET
app.get('/todos', (req, res) => {
	// res.json(toDoArray);
	// what is this status 264?
	res.status(264).json(toDoArray);
})

// Create - POST
// Need to use POST because can potentially show private data in the http request
// And get only allows a limited number of characters in the URL
// Example below won't solve anything, just for demo
app.post('/todos', (req, res) => {

	// After installing bodyParser - needed to process POST from client
	console.log(req.body);	

	// create a new to do array
	let newToDoArray = {
		id: 4,
		// description: "Buy more stuff",
		description: req.body.description,
		isComplete: false
	}	
	// push new object element to 
	toDoArray.push(newToDoArray);
	// oops, argument below needs to be newToDoArray
	// res.json(toDoArray);
	res.json(newToDoArray);
})

// Delete - DELETE
app.delete('/todos/:id', (req, res) => {
//	let requestedToDoId = req.params.id;
	let requestedToDoId = parseInt(req.params.id);
	console.log(requestedToDoId);
	// now put in code to delete
	let targetIndex = toDoArray.findIndex(todo => {
		console.log(todo.id);
//		return todo.id;
		// the index matches if the id's are equal
		return todo.id === requestedToDoId;
	})
	console.log(targetIndex);

	// now remove the index
	toDoArray.splice(targetIndex, 1);

	// send back data as confirmation
	res.json(toDoArray);
//	res.end();
})

// Update - PUT
app.put('/todos/:id', (req, res) => {
	let requestedToDoId = parseInt(req.params.id);
	let requestedToDo = toDoArray.find(todo => {
		return todo.id === requestedToDoId;
	})

	requestedToDo.isComplete = !requestedToDo.isComplete;
	res.json(requestedToDo);
})

// LISTENER
const port = 3000 || process.env.PORT;
// app.listen(port, () => (`Listening on ${port}`));
app.listen(port, () => console.log(`Listening on port ${port}`));
