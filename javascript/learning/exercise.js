// Should the prompts be inside a function? Maybe, maybe not.
// It would probably depend on if the prompts needed to be called again.

function user_output() {
	var fname_var = prompt("Please enter your first name", "Enter First Name");
	var lname_var = prompt("Please enter your last name", "Enter Last Name");
	var snack_var = prompt("What is your favorite snack?", "Enter Snack");
	var drink_var = prompt("What is your favorite drink?", "Enter Drink");
    console.log("Hi there " + fname_var + " " + lname_var + ", it seems that you enjoy eating " + snack_var + " and drinking " + drink_var + "!");
//    document.write("Hi there " + name_var + ", it seems that you enjoy eating " + snack_var + " and drinking " + drink_var + "!");
}

// user_output();

function getSpaceArguments() {
	console.log("arguments space separation: " + arguments);
}

function getCommaArguments() {
	console.log("whole arguments comma separation: " + arguments);
	// below synxtax throws an error
	// console.log("array arguments comma separation: " + arguments[]);
	// below reference does not return entire array
	// console.log("array arguments comma separation: " + arguments[-1]);
	console.log("discrete argument cell " + arguments[0]);
}

function forCommaArguments() {
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

// below throws an error
// getSpaceArguments(1 2 3);
getCommaArguments (4, 5, 6);
forCommaArguments (7, 8, 9);

// Interesting - can create an iterator
function getArgumentIterator() {
	var argItr = arguments[@@iterator]();
}
getArgumentIterator(1,2,3,4);