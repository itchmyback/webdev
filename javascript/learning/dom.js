// getElementById - returns an element
var food = document.getElementById("fruit");
// note - experiment where there are accidentally two IDs, the first is matched and returned

console.log(food);
// "Caramelized Apple Pound Cake"

// getElementsByClassName - returns an array
var food2 = document.getElementsByClassName("breakfast");
console.log("Logging food2[0]");
console.log(food2[0]);
// "Cinnamon Morning Bun"

console.log(food2);
// HTMLCollection(2) [li.breakfast, li.breakfast]
// 0: li.breakfast
// 1: li.breakfast
// length: 2

var food3 = document.getElementsByTagName("li");
console.log("food3 is " + food3[0]);

// a favorite - anything that is selectable can be passed in
// only returns the first
var food4 = document.querySelector("#fruit");

var food4a = document.querySelector(".breakfast");

console.log(document.querySelector("h1"));

// returns all matches
var food5 = document.querySelectorAll("h1");

var food5a = document.querySelectorAll(".breakfast");

// now let's start changing things
document.getElementById("fruit").style.color = "green";
// changed to green
document.getElementById("fruit").style.border = "10px solid orange";
// boom

// note - cannot use dashes: font-size cannot be used; must use fontSize
document.getElementById("fruit").style.fontSize = "36px";

document.getElementById("fruit").style.background = "blue";

document.getElementById("fruit").style.marginTop = "150px";

// in class exercise similar to homework
// every 3 seconds change background from orange to blue

var colorArr = ["white", "lightblue"];

document.querySelector("body").style.background = colorArr[0];

// maybe should have tried to use an odd even logic
// but, as seen in homework, it's an scaleable to higher number of iputs

var counter = 1;
var i = 0;

function changeBkgColor() {
    i = counter % 2;
// try this method to set, different than homework
//	document.body.style.backgroundImage = bkg_array[i]; 
    document.querySelector("body").style.background = colorArr[i];
    counter++;
    console.log(counter);
    console.log(colorArr[i]);
}

// setInterval(changeBkgColor, 3000);

// here's how Jonathan did it
var theBody = document.querySelector("body");
var isOrange = false;
var stop = true;

// anonymous function inside setInterval
setInterval(function() {
    if(stop == true) {
        return;
    }
    if(isOrange === true) {
        theBody.style.background = "blue";
    } else {
        theBody.style.background = "orange";
    }
// }, 3000);
}, 0);

// textContent
// Selects first "li"
document.querySelector("li").textContent;
document.querySelector("li").textContent = "Sold out! Check again tomorrow."; 

// innerHTML
document.querySelector("ul").innerHTML;
document.querySelector("ul").innerHTML = "Chocolate <b>Hazelnut</b> Croissant";

// get and set Attribute
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "http://www.amazon.com");

// Events
// clicking on a page, pressing a key, hovering over links
// twofold process - select an element and then add an event listener
// What are the addEventListener inputs?

document.querySelector("button").addEventListener("click", 
    function() {
        alert("How's it going?")
    }
);

document.querySelector("h1").addEventListener("click", 
    function() {
        document.querySelector("h1").style.color = "red";
// this notation doesn't work
//        document.querySelector("h1").style.color("red");
    }
);

document.querySelectorAll()
document.querySelectorAll("h1").addEventListener("mouseover", 
    function() {
        document.querySelector("p").textContent = "Cheesecake bites";
        document.querySelector("p").style.border = "pink 3px solid";
    }
);

// This only fires when I hover over the first h1 element
// There's no good way to select multiple elements
// Need to run through a loop
// Or use jquery
document.querySelector("h1").addEventListener("mouseover", 
    function() {
        document.querySelector("p").textContent = "Cheesecake bites";
        document.querySelector("p").style.border = "pink 3px solid";
    }
);