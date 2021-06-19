const express = require('express');
const app = express();
const fetch = require('node-fetch');
// const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
    res.render('home.ejs', { type: types })
//	res.send("I am groute!!!");
})

// app.get('/getActivity', (req, res) => {
app.get('/activity', (req, res) => {
    const { type, price, participants } = req.params;

    // error is in here with how the params are being fed in
    const urlStr = `http://www.boredapi.com/api/activity?type=${type}&minprice=0&maxprice=${price}&participants=${participants}`;

// This hardcoded endpoint doesn't give an error, so the error is with the variables being fed to the above endpoint
//    const urlStr = "http://www.boredapi.com/api/activity?type=education&minprice=0&maxprice=1&participants=1";

//    const urlStr = 'https://dog.ceo/api/breeds/image/random';
    fetch(urlStr)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                res.render('error.ejs', { error: data.error } )
            } else  {
            res.render('result.ejs', { data });
            }
        })
        .catch(err => {
            console.log('There was an error: ', err)
        })
})

const port = 8080 || process.env.PORT;
// app.listen(port, () => {
//    console.log('App listening on port 3000')
// })
app.listen(port, () => console.log(`Listening on port ${port}`));
