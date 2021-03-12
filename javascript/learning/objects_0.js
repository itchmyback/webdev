// I was sick today - 3/8/2021

// Coming in at the end, something with array and dot notation
// sounds like objects
// key dot notation

// Okay - yeah it sounds like objects


var person = {
    name: "Walter White",
    age: 50,
    family: ["Skylar", "Flynn", "Holly"], // array within the person object
    city: "Albuquerque",
    smart: true, // boolean
    associates: { // associates object inside person object
 	 friend: "Jesse",
 	  enemy: "Gus"
    },
    hobbies: "Cooking"
}

// associates: {friend: "jesse", enemy: "Gus"}

// Dot Notation
// person.associates.enemy
// person = object
// associates = key
// what is enemy? another key? yes, because associates is another object
//
// Bracket Notation
// This is the notation that was from Adam's problem that I had not seen before
// Notice the quotes need around keys in bracket notation
// person["associates"]["enemy"]
//
// Mix and Match
// person.associates["enemy"]

// Notes - keys don't typically have quotations, but if there's a space, you might need it
// In that case, or other special ascii, then bracket notation might come in handy
// BUT - don't use a space, as usual

// Array of objects - this is typically what you get when query data
// array - 2 indexes
// elements are objects - how do you know? curly braces

var posts = [
    {
 	 title: "How to cook the perfect scrambled eggs",
 	 author: "Bob Odenkirk",
 	 comments: ["The secret is lots of butter", "Will this raise my cholesterol?"]
    },
    {
 	 title: "Eggs are cheap, quick, and easy",
 	 author: "Bryan Cranston",
 	 comments: ["What if I don't have a spatula?", "I love butter.", "Salt and pepper are the ONLY spices you need"]
    }
]

// exercise - return Bob Odenkirk
// posts is an array, so posts[]
// then we know Bob Odenkirk is in element[0], so posts[0]
// then we know Bob Odenkirk is under author key, so posts[0].author

// exercise - I love butter
// posts[1].comments[1]
// now do it in bracket notation
// posts[1][comments[1]]
// NO
// posts[1]["comments"][1]


// I think at the beginning of class, we covered for each and maps to iterate through arrays
// Or was that from the last lecture on arrays?

var people = [
    {
        fname: "Jason",
        lname: "Smith",
        age: 29,
        married: true
    },
    {
        fname: "Yo",
        lname: "Mama",
        age: 65,
        married: false
    }
]

// How to get fname? iterate - here with forEach
// note person is a argument represented to be people array
people.forEach (function (person) {
    // practice key value logging
    // This doesn't work
    // console.log (person[key]);
    console.log (person.fname + " is " + person.age + " years old.");
    var wed = "not";
    if (person.married) {
       wed = "";
    }
})

// To iterate through this, I guess we need this
people.forEach (function (person) {
    for (var [key, value] of Object.entries(person)) {
        console.log(person[key]);
        // Why doesn't this work?
        // console.log(person.key)
    } // end for
}) // end  forEach

// Also, there are built in object methods - keys(), values(), entries()
// OH LOOK, we used entries() above!

// This is a bad way to iterate, it's like a double iteration, don't do this
// But the point is person.key still doesn't work
people.forEach (function (person) {
    for (var key of Object.keys(person)) {
        console.log(person[key]);
    }
})