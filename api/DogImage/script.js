let image = document.getElementById('pic');
console.log(image);
image.setAttribute('src', 'https://images.dog.ceo/breeds/bouvier/n02106382_952.jpg');

let endpoint = 'https://dog.ceo/api/breeds/image/randomn';

let button = document.getElementById('btn');

button.addEventListener('click', ()=>{

// go to the endpoint

// get back json - if all is ok
    // then parse the json

// do something with parsed json

// handle errors

fetch(endpoint)
.then(response => {
    if(response.ok) { // if ok - this is json (string)
        return response.json();  // response instead of res
    } // end if
    throw Error("Rasheedat broke it!!!");
}) // end .then
.then(data => image.setAttribute('src', data.message) ) // do something with the object
// .then(data => console.log(data) ) // if above is okay, do something
.catch(err => console.log(err) ) // handle errors

})