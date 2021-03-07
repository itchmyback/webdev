// Could write a function to get the inputs but it's probably easier to use bare prompts to avoid retriving the return values.

// function get_info() {
	// Don't need a text prompt
	// var name_var = prompt("Tell me your name.");
	var name_var = prompt("Tell me your name.", "Enter Name");
	var num0_var = prompt("Give me a number.", "Enter Number");
	var num1_var = prompt("Give me another number.", "Enter Another Number");
//	return(); 
//}

function write_name() {
    document.write("You are going to have a wonderful day, " + name_var + ".<br>");
}

function write_numbers() {
	// A couple of ways to convert to number
	//sum = (1 * num0_var) + (1 * num1_var);
	sum = Number(num0_var) + Number(num1_var);
	document.write("By the way, the sum of your numbers is ", sum + ".<br>");
}

//get_info();
write_name();
write_numbers();