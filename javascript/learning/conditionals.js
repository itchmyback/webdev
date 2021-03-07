var hour = 18;

if (hour < 12) {
    console.log("Good morning. Would you like some toast?");
} else if (hour > 12 && hour < 17) {
    console.log("Good afternoon. Time for tea!");
} else {
    console.log("Good evening. How about noodles for dinner?")
}

var count = 1;

while (count < 11) {
    console.log("count is " + count);
    count++;
}
var counter = 1
while (counter < 101) {
// let's use the non if then method

//    if (counter % 2 == 0) {
//    } else {
        console.log(counter);
//    }
//    counter++;
    counter = counter + 2;
}

// loop stops executing when conditional is true, so don't use ==, use !=
// don't do i < 101, do i <= 100
for (var i = 1; i <= 100; i = i +2) {
    if (i % 2 == 0) {
    } else {
        console.log("number is " + i);
    }
}
function hai() {
    console.log("Hai Thar");
}

// calling function from inside javascript file works but can't get it to work from html
hai();

function squareSum() {
    // arguments
    var sum = 0;
    console.log("hello");

    for(var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
      
      sum = sum + Math.pow(arguments[i],2);
      console.log(sum);
    return sum;
    }
}