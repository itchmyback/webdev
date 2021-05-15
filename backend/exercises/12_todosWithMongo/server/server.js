const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// This loads the client files as the default browser files
app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect
// 2) Build blueprints
//    a) Schema
//    b) Model
// 3) Build queries
//    a) Read with Mongoose
//    b) Create with Mongoose
//    c) Delete with Mongoose
//    d) Update with Mongoose


// MONGOOSE
// keys is an object exported from keys, {mongoURI: value}
const keys = require('./config/keys');

// Calling this section "Connection"
const mongoose = require('mongoose');

let url = keys.mongoURI;
// mongoose.connect(url, options);
// mongoose.connect().then().catch()
mongoose.connect(url, 
	// options
	{
	useNewUrlParser: true,
	useUnifiedTopology: true
	}
)
// Don't put in the url, that will contain the dev keys
//.then( () => console.log("Connected to database" + url) )
.then( () => console.log("Connected to database") )
// error handler
.catch(error => console.log("Cannot connect to database") )

// Import Data
// Don't need fake data anymore
//const { toDoArray } = require("./fakeData");

// Schema
let todoSchema = mongoose.Schema({
	// id: Number, // default
	// description: String,
	description: {
		type: String,
		required: [true, "Must have description!"]
	},
	// isComplete: Boolean
	isComplete: {
		type: Boolean,
		default: false
	}
})

// Model
let TodoModel = mongoose.model('todos', todoSchema);


// Read - GET
app.get("/todos", (req, res) => {
	TodoModel.find( {}, (error, result) => {
		if(error) {
			console.log("Error getting data from the database: ", error);
		} else {
			console.log("Results: ", result);
	//		res.status(264).json(toDoArray);
			res.status(264).json(result);
		}
	})

//  res.status(264).json(toDoArray);
});

// used temp for creating a a unique idea
// Don't need this anymore
// let newId = 4;

// Create - POST
app.post("/todos", (req, res) => {
	// new TodoModel
//  let newTodo = {
	let newTodo = TodoModel({
	// Don't need this anymore
    // id: newId++,
    // description: req.body.description,
    	description: req.body.description
	// Defaulted in the schema
    // isComplete: false,
//  };
	})
	newTodo.save( (error, result) => {
		if(error) {
			console.log("Error: ", error)
		} else {
			console.log("Success: ", result)
			// res.json(newTodo);
			res.json(result);
		}
	})
  // This is for the fake data array, so don't need
  // toDoArray.push(newTodo);
  // move this so it only executes upon successful execution
  // res.json(newTodo);
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
	// See below for issue related to parseInt
  // let requestedTodoId = parseInt(req.params.id);
	let requestedTodoId = req.params.id;
  // fake data, using an array
	/*
  let requestedTodoIndex = toDoArray.findIndex((todo) => {
    return todo.id === requestedTodoId;
  });
  toDoArray.splice(requestedTodoIndex, 1);
  res.json(toDoArray);
	*/
// BUT, this is not working (from the client)
// Something must be wrong in the read or the create
// It's because mongo doesn't use "id", must use "_id"
// So must be in the client
// Still not working because of cast error related to id which is not a num but a string
	TodoModel.findByIdAndDelete(requestedTodoId , (error, result) => {
		if(error) {
			console.log("Error: ", error);
		} else {
			console.log("Deleted: ", result);
			res.json('result');
		}
	})	
		
});

// Update - PUT

// findById
	// get a result back
	// if error
		// handle it
	// else
		// update is complete
		// save the new result

app.put("/todos/:id", (req, res) => {
//  let requestedTodoId = parseInt(req.params.id);
	let requestedTodoId = req.params.id;
	// Using variable because req.params.isComplete wouldn't work in object{} argument below
	let requestedTodoIsComplete = req.params.isComplete;

//  let requestedTodo = toDoArray.find((todo) => {
//    return todo.id === requestedTodoId;
	TodoModel.findByIdAndUpdate(
		requestedTodoId, 
		{requestedTodoIsComplete: !requestedTodoIsComplete},
//		{req.params.isComplete = !req.params.isComplete}, 
		(error, result) => {
			if(error) {
				console.log("Error: ", error);
			} else {
				console.log("Updating: ", result);
				res.json('result');
			}
  });
//  requestedTodo.isComplete = !requestedTodo.isComplete;
//  res.json(requestedTodo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
