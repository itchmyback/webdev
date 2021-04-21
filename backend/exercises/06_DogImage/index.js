// FOUNDATION
let express = require('express');
let app = express();

app.set('view engine', "ejs");

// look in public folder
app.use(express.static('views'));
app.use(express.static('public'));

// need to install node-fetch
const $fetch = require('node-fetch')

// ROUTES
app.get('/', (req, res) => {
 //   res.send("I am GROUTE");
 res.render('index', {image: 'https://images.dog.ceo/breeds/bouvier/n02106382_952.jpg'})
})

const endpoint = 'https://dog.ceo/api/breeds/image/random';

app.get('getImage', (req,res) => {
    // fetch is front-end js, so we will install node-fetch
    $fetch(endpoint); // go to the endpoint
    .then(response => { // if ok - this json (string)
        if(response.ok) {
            return response.json(); // parse the string
        }
//        throw Error("Rasheedat broke it!!!!")
        // create an error.js
        res.render('error', {error: "Something doggone funny happened!"});
    })  

})

app.listeners

// LISTENER
port = process.env.PORT || 3000;
app.listen(port, console.log(() => `Listening on ${port}`));