### Question 6:

Write a Javascript loop that will iterate from 1 to 5, both included, and log if the number is odd or even.

Now put this code into a function that takes appropriate inputs as arguments (e.g. 1, 5) and returns an object like the following.

    {
      1: "odd",
      2: "even",
      3: "odd",
      4: "even",
      5: "odd"
    }


### Your answer may be provided as a code file with single function within it.  Explanation not required. Comments not required for grading.

  for(var i = 1; i <= 5; i++) {
    if(i % 2 == 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

# My goal is to get input and output arrays into an object as a key-value pair
# I was defeated by a typo and needing bracket notation when working with variables for keys
# Will provide file

function oddeven(a, b) {
  var output = {};

  for (var i = Number(a); i <= Number(b); i++) {
    if (i % 2 == 0) {
     output[i.toString()]  = "even";
//      output.i.toString() = "even";
//      console.log(i + " is even");
//      console.log(i.toString());
    } else {
     output[i.toString()]  = "odd";
//      output.i = "odd";
//      console.log(i + " is odd");
    }
  } // end for
  console.log(output);
  return output;
} // end function

oddeven(1,5);


### Feedback
Awesome!!!