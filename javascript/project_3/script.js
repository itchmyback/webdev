// Should array size be initialized?
var inputArray = [];

function get_info() {
	inputArray[0] = prompt("Give a number.", "Enter Number");
	inputArray[1] = prompt("Give another number.", "Enter Another Number");
	inputArray[2] = prompt("Give a number again.", "Enter Number Again");
}

function sum_numbers() {
	var sum = 0;
	for (var i = 0; i < inputArray.length; i++) {
		sum = sum + Number(inputArray[i]);
	}
	return sum;
}

get_info();
document.write("The sum of all your numbers is " + sum_numbers() + ".<br>");