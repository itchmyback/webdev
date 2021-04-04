const express = require('express');
const app = express();

const chalk = require('chalk');

// set up your logger
const logger = require('morgan');

// BUILD the following route handlers
// use POSTMAN to test - NO BROWSERS allowed - backend hats only

// 1. build a root route that returns 'I am the root route.'
app.get('/', (req, res) => {
  res.send('I am the root route\r')
});

// 2. build a route for /animals that returns 'I love animals.'
app.get('/animals', (req, res) => {
  res.send('I love animals')
});

// BUILD the following route handlers
// use CURL to test - NO BROWSERS allowed - backend hats only

// 3. build a route for /animals/cats that returns 'I love cats.'
app.get('/animals/cats', (req, res) => {
  res.send('I love cats')
});

// 4. build a route for /desserts that returns 'I love desserts.'
app.get('/desserts', (req, res) => {
  res.send('I love desserts')
});

// BUILD the following route handler
// use CURL or POSTMAN to test - NO BROWSERS allowed - backend hats only

// 5. build a route that handles ALL other routes that returns 'Page not found yet.'
app.get('*', (req, res) => {
  res.send('Page not found!!!')
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.green(`Listening on port ${chalk.cyanBright(port)}`)));
