const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log("HALP");
	res.send("I am GROUTE!!!");
//    res.render('index.ejs');
})

app.get('/error', (req, res) => {
  res.render('error.ejs')
})

// LISTENER
const port = process.env.PORT || 3000;

// app.listen(port, () => console.log('Listening on port 3000!'));
app.listen(port, () => console.log(`Listening on port ${port}`));
