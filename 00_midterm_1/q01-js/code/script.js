// get reference to the first input element
// CORRECTION - this should have a value param
// var firstNum = document.getElementById("first");
var firstNum = document.getElementById("first").value;

// get reference to the second input element
// CORRECTION - this should have a value param
// var secondNum = document.getElementById("second");
var secondNum = document.getElementById("second").value;

// Adding an event listener for Multiply submit button
// This event listener doesn't work with the Multiply button but it does with Button type, why not?
// OKAY - this event listener was not firing because of the prevent default statement in the button click function
document.querySelector("form").addEventListener("submit", function(event) {
//   alert("This click works");
firstNum = document.getElementById("first").value;
secondNum = document.getElementById("second").value;
console.log(firstNum);
console.log(secondNum);
});

// get reference to the submit input element which
// looks like a button
var btn = document.querySelector("input[type='submit']");

// DEBUG
// These are not coming out as anything?
// It's because we were fetching element node or whatever, not the value
// So things work with default values, but the values don't update
// Potentially need an event listener to refresh values on button click
// console.log(firstNum);
// console.log(secondNum);

// get reference to the area where you will place the
// answer to the calculation
var msg = document.querySelector("#message");


// attach a handler function to the button which
// calculates the result of multiplication and 
// displays the result
btn.onclick = function(){
   // I couldn't get the input fields to refresh in an outside event listener
   // So I added them here
   firstNum = document.getElementById("first").value;
   secondNum = document.getElementById("second").value;
   // console.log(firstNum);
   // console.log(secondNum);
   let answer = myCalc(firstNum, secondNum)
//   alert("This click works");
// console.log(answer); // debug
   msg.innerText = `The answer is ${answer || ''}`
   // Do we need to prevent default?
   // Well, the values won't persist, so maybe leave it here. But prevent default stopped the external event listener from firing
   event.preventDefault();
}

// perform the calculation ... here it multiplies the
// two inputs into the function.  Having a separate function
// allows the developer to change the calculation without
// requiring to change other code.
const myCalc = function(a, b) {
// debug   console.log("hello world");
   console.log(a*b);
   // Brain is fried, but I think the return statement was missing? Or did I delete it?
   return(a * b)
} 