// script tag in head or in body

// notice $ notation for jQuery
// examples of $() selector

// select all image tags
// $( "img" )

// select elements with class of section
// $( ".section" )

// vanilla vs jquery
/*
var myHeader = document.getElementById( "header" );
var myHeader = document.getElementsByTagName( "h1" )[0];
var myHeader = document.querySelector( "h1" )

var myHeader = $( "h1" );
var myHeader = $( "h1" )[0];
*/

// points by Piyush
// myHeader points to the element with ID of header

$(document).ready( function() {
    // your code goes in here
});

// console debug
// $( 'h1' )
// returns node list

// $( 'h1' )[0]
// returns <h1>The Burger Joint</h1>

// $( 'li' )[0]
// returns <li id="burger">...

// $( "li" )[0].html()
// error

// $( "#burger" ).html("I like fish")

// exercise
function changeBurger() {
    setTimeout( function() {
        $( "#burger").html( "Give me your fish" ) }, 100 );
}

changeBurger();

// arrow notation
setTimeout( () => { $( '#burger' ).html( "I like tacos" )}, 3000);

// use css() insted of html()
$( "#burger" ).css( "background-color", "lightblue" );

// let myStyles = { border: "green solid 5px", background-color: "lightorange"; }
let myStyles = { border: "green solid 5px", backgroundColor: "orange" };
$( "#burger" ).css( myStyles );

// change image
// $( "img" )[0].attr()
$( "img" ).attr( "src", "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png");

// change input
// $( "input" )[0].attr( "placeholder", "Enter your email" );
$( "input" ).attr( "placeholder", "Enter your email" );

// change select
$( "select" ).val();

// add class
$( "img").addClass( "pic" );

// toggle Class

// fade
$( "img" ).fadeOut();
$( "img" ).fadeIn();

