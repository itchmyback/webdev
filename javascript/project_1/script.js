
function user_output () {
	var name_var = prompt("Please enter your name", "Enter Name");
	var snack_var = prompt("What is your favorite snack?", "Enter Snack");
	var drink_var = prompt("What is your favorite drink?", "Enter Drink");
    document.write("Hi there " + name_var + ", it seems that you enjoy eating " + snack_var + " and drinking " + drink_var + "!");
}

user_output();