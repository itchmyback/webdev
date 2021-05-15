// FOUNDATION
let express = require('express');
let app = express();

app.set('view engine', "ejs");

// look in public folder
app.use(express.static('views'));
app.use(express.static('public'));

// keys is an object exported from keys, {mongoURI: value}
const keys = require('./config/keys');

// Calling this section "Connection"
const mongoose = require('mongoose');

let url = keys.mongoURI;
// mongoose.connect(url, options);
mongoose.connect(url, 
	// options
	{
	useNewUrlParser: true,
	useUnifiedTopology: true
	}
)
.then( () => console.log("Connected to database") )
// error handler
.catch(error => console.log("Cannot connect to database") )


// BLUEPRINTS
// Impose Schema, constraints on data format etc
// assign to variable, like a constructor
let marvelSchema = mongoose.Schema(
	{
	/*
	alias: String,
	fname: String,
	lname: String,
	nemesis: String,
	hero: Boolean
	*/
	// Add in defaults, required, as applicable
	alias: {
		type: String,
		required: [true, "Taylor distracted me!!!"]
	},
	fname: {
		type: String,
		default: "NA"
	},
	lname: {
		type: String,
		default: "NA"
	},
	nemesis: {
		type: String,
		default: "NA"
	},
	hero: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: Date.now(),
	},
	alive: {
		type: Boolean,
		default: true
	}
);

// Need a model
// mongoose.model(placeholder, userSchema)

// placeholder is what your collection is called
// My personal collection is called Johnny_user

// mongoose.model("Johnny_user", userSchema)

// Now assign to variable
let MarvelModel = mongoose.model("Johnny_characters", marvelSchema);

// If we wanted to import the model and schema from an external file
// const {MarvelModel} = require('./models/MarvelModel.js');

// What is this? some sort of User constructor?
// Array input did not work
// Have to do something else
let Character0 = new MarvelModel(
		{
		// fname, lname, nemesis - missing alias and hero, this will still get created
		fname: "Steve",
		lname: "Rogers",
		nemesis: "Red Skull"
/*
		},
		{
		name:"Raisin",
		price: 2.49,
		tasty: false
*/
		}
	// Or maybe could use User1
	/*
	},
	{
	name: "Kramer",
	age: 47,
	email: "CosmoKramer@gmail.com"
	}
	*/
)

// What is this format?
// console.log("User:", User);

// QUERIES

// What is this? some sort of error handling? no, this is saving or updating or something
// So review, what is this format?
// this is the same as saying db.jm_users.insert(User) - in mongodb
// So, for the collection - JM_user - will get lower cased and pluralized by mongoose - jm_users
Product.save( (err, product) => {
	if(err) {
		console.log("Error saving the cookie!!!");
	} else {
		console.log("Cookie info: ", product);
	}

	// NOTE: same as code above BUT only should be used for demo purposes or dev purposes
	// In production, you are probably going to send this user data somewhere
	// and will need to res.send(), res.render(), res.json(), etc....
	// console.log(err ? "Error creating document" : "User created: " + user);
})

// What's this? I think we are creating a new user 
// It's an alternate method - new/save vs create
// create() uses the model, not the object instance
// So we could also pass in an array for multiple users
// Model.create( {}, (x,y) => {} )
ProductModel.create(
	{
		name:"Sugar",
		price: 1.99,
		tasty: true
	},
	(err, product) => {
		console.log(err ? "Error creating document" : "User created: " + product);
}
)

// How to find all the users
/*
User.find( {}, (err, users) => {
	console.log(err ? "Error reading document" : "Users found: " + user);
})
*/
// db.jl_users.find({})
ProductModel.find({}, (err, product) => {
	console.log(err ? "Error reading document" : "Users found: " + product);
})


// need to install node-fetch
// const $fetch = require('node-fetch')

// ROUTES
app.get('/', (req, res) => {
	res.send("I am GROUTE");
})

// LISTENER
port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`) );
