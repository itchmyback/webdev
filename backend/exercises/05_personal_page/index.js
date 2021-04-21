// FOUNDATION
const express = require('express');
const app = express();

const logger = require('morgan');

// remove ejs as an extension requirement
app.set('view engine', 'ejs');

// look in public folder
app.use(express.static('public'));

// to modularize the navbar links/images
// const data = require('./helpers/projectData');
// need to deconstruct
// RECALL - in that file, there is an object {data:array_of_objects}
// this line -- const data = require('./helpers/projectData'); -- set a variable equal to the object
// data equal to the object which has a key of data is confusing
// {data} does not create a new variable per se, it destructures the object, and now {data} refers to the array of objects
// Or maybe, it looks like if data = array of objects, then {data} may create object {data, array of objects}
// exports/imports is tricky - this could probably be it's own lesson
// Let's do a mini exercise elsewhere

const {data} = require('./helpers/projectData');
console.log(data);

// ROUTES
app.get('/', (req, res) => {
    res.send("I am GROUTE!!!");
});

app.get('/home', (req, res) => {
//    res.render('home.ejs')
//    res.render('home')
// Here, {data refers to the ejs variable on the home page while data} refers to the array of objects value}
    res.render('home', {data: data});
});

app.get('/about', (req, res) => {
    res.render('about')
});

// LISTENER
const port = 3005 || process.env.PORT;
// app.listen = (port, () => `Listening on ${port}`);
// app.listen = (port, () => console.log(`Listening on ${port}`));
app.listen(port, () => console.log(`Listening on ${port}`));
