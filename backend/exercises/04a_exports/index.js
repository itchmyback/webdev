// FOUNDATION
const express = require('express');
const app = express();

// recall that ejs doesn't need a require statement but does need a views folder

app.set('view engine', "ejs");

// EXPORTS/IMPORTS and Object Destructure

// regular variable declaration
const bro1 = "sup bro";

// export OBJECT (not variable) from file, export is a node method
// exports.key = value
// NOTE: The export Object has no variable identifier yet, sort of just floating in memory
// No variable, linked to a module file
// It is read into a variable during import

// data.js has a variable exports.data = "Yo man what's up!"
// Exporting variable comes out as object
// Again, exports looks like a variable declartion but it's not
// The equal sign is deceiving but exports.key = value
const bro2 = require('./data.js');
console.log(bro2);
// printing bro2 prints out an object
// { data: "Yo man what's up!" } 

// const {bro3} = require('./data.js');
// console.log(bro3);
// undefined
// because { undefined_key } = undefined

// destructuring call
// require('./data.js') => {data, value}
const {data} = require('./data.js');
console.log(data);
// printing data prints out the destructured value 
// Yo man what's up!

// js file with variable and methods defined, and then they are exported - age and getName() (as an objects)
const user = require('./user.js');
console.log(user);
// { getName: [Function: getName], age: 50 }

// below are dot notations object.key
console.log("user is " + user.getName());
console.log("age is " + user.age);

// or can destructure, but already been done

// One more example to drive the point home
// info.js
// exports.info = { info: "boo" };  // AGAIN, info is not a variable declaration, it's a key
// module file named info with object key named info
// object value is another object and inside that object is a key named info
const { info } = require( './info.js' );
console.log( info );
// { info: ' boo ' }
console.log( info.info );
// boo

// ROUTES
app.get('/', (req, res) => {
	res.send("I am GROUTE!!!");
});

app.get('/hello', (req, res) => {
	res.render('hello');
});

app.get('/hello1', (req, res) => {
	// notation here is that yolo1 is the ejs variable and bro1 is the data to pass
	// <%= yolo1 %> shows "sup bro" on browser
	res.render('hello1', {yolo1: bro1});
});

app.get('/hello2', (req, res) => {
	// <%= yolo2 %> shows [object Object] on browser
	res.render('hello2', {yolo2: bro2});
});

app.get('/hello3', (req, res) => {
	// <%= yolo3 %> becomes data and shows "Yo man what's up!" on browser
	res.render('hello3', {yolo3: data});
});

app.get('/hello4', (req, res) => {
	// <%= yolo4 %> becomes data and shows "Jim" on browser
	res.render('hello4', {yolo4: user.getName()});
});

app.get('/hello5', (req, res) => {
	// <%= yolo5 %> and <%= yolo55 %> becomes data and shows "Jim" and '50' on browser
	res.render('hello5', {yolo5: user.getName(), yolo55: user.age} );
});


// LISTENER
port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
