// get the form data
var userName = document.querySelector("#yname").value;
var userPassword = document.querySelector("#ypassword").value;

// var debugUserName = prompt("gimmename");

console.log(userName);
console.log(userPassword);

document.querySelector("p").textContent;


// I'm totally stuck
// We want to listen for the form data, ugh, I guess I should have known that
// argument for function is the event object, it contains data about the event that occurred
// wow brand new

// so by listening for event, you can retrieve the data from the element? the element gets refreshed?
// document.querySelector("form").addEventListener("submit", function(event) {
document.querySelector("#jon_form").addEventListener("submit", function(event) {
    var errors = []; // array for error messages

    // now start doing input conditional checks
    // using getElementById to mix it up, notice you don't need # for Id
    if(document.getElementById("name").value === "") { // If name is blank, undefined
        errors.push("Please enter a name");
        console.log("name error");
    }
    if(document.getElementById("password").value.length <= 6) { // If password is not long enough
        errors.push("Password must be greater than 6 characters");
    }

    if(errors.length > 0) { // check if errors exist
        event.preventDefault(); // after user hits submit, if there are errors, do not refresh
        document.querySelector("#wrapper").style.border = "1px solid red";

        // The join function must implicitly know that if there are less than 2 array elements, it doesn't do anything.
        document.querySelector("p").textContent = errors.join(", "); // add the comma in to error message
        document.querySelector("p").style.color = "red";
    }
});