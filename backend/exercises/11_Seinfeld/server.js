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
.then( () => console.log("Connected to database" + url) )
// error handler
.catch(error => console.log("Cannot connect to database") )


// BLUEPRINTS
// Impose Schema, constraints on data format etc
// assign to variable, like a constructor
let userSchema = mongoose.Schema(
	{
	name: String,
	age: Number,
	email: String
	}
)

// Need a model
// mongoose.model(placeholder, userSchema)

// placeholder is what your collection is called
// My personal collection is called Johnny_user

// mongoose.model("Johnny_user", userSchema)

// Now assign to variable
let UserModel = mongoose.model("Johnny_user", userSchema);

// What is this? some sort of User constructor?
let User = new UserModel(
	{
	name: "Jerry",
	age: 45,
	email: "jerryseinfeld@gmail.com"
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

// What is this? some sort of error handling?
// this is the same as saying db.jm_users.insert(User); WHY?
// So, for the collection - JM_user - will get lower cased and pluralized by mongoose - jm_users
User.save( (err, user) => {
	if(err) {
		console.log("Error!!!");
	} else {
		console.log(user);
	}

	// NOTE: same as code above BUT only should be used for demo purposes or dev purposes
	// In production, you are probably going to send this user data somewhere
	// and will need to res.send(), res.render(), res.json(), etc....
	// console.log(err ? "Error creating document" : "User created: " + user);
})

// What's this? I think we are creating a new user 
// So we could also pass in an array for multiple users
UserModel.create(
	{
	name: "Elaine",
	age: 89,
	email: 'elainebenes@gmail.com'
	},
(err, user) => {
	console.log(err ? "Error creating document" : "User created: " + user);
}
)

// How to find all the users
// User.find( {}, (err, users) => {
// Oops - can't use instance/object User, must use Model UserModel
UserModel.find( {}, (err, users) => {
	console.log(err ? "Error reading document" : "Users found: " + users);
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
