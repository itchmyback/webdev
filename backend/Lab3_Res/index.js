const express = require('express');
const app = express();

const chalk = require('chalk');

const logger = require('morgan');
app.use(logger('dev'));

const pokemon = require('pokemon');

// Using your browser and dev tools - 
// find what content type is being returned for each of the following

// 1. Build a root route handler that returns "Root route"
app.get('/', (req, res) => {
  res.send('I am the root route')
});

// 2. Build a route handler for /text that sends text - "I am the text route"
app.get('/text', (req, res) => {
  res.send('I am the text route')
});

// 3. Build a route handler for /json that returns json stating - 'I am the json route.'
app.get('/json', (req, res) => {
  res.json('I am the json route')
});

// 4. Build a route for /test that redirects the user back to the root route
app.get('/surprise', (req, res) => {
  res.send('SURPRISE')
});

app.get('/test', (req, res) => {
  res.redirect('/surprise')
});

// ending requests
app.get('/console', (req, res) => {
  console.log("I am the console")
  res.end()
  res.sen("I am ending this")
});

// 5. Using the pokemon module, and previous demos - 
  // a. Build a route handler for /pokemon
app.get('/pokemon', (req, res) => {
  // res.send('POKEMON GOTTA CATCH EM ALL')
  // b. Build an array of 5 random pokemon
  var pokeArray = []
  for(let i = 0; i < 5; i++) {
    // This will return the same value because random() was only run once
    // pokeArray.push(poke);
    pokeArray.push(pokemon.random());
  }
  // c. Using the map method, create a new array of pokemon encased in <p> tags
  let result = pokeArray.map(el => {
    return `<p>${el}</p>`;
  });
  res.send(result.join(''));
	
  // d. Send your array of <p> tag-encased pokemon to the browser using `Here are my Pokemon: ${result}.`
      // Go back to map and put in <p></p>
});

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(chalk.blue(`Listening on port ${chalk.bgWhite.red(port)}`)));
