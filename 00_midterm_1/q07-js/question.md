### I'd like to empty the array below. Please provide any 3 methods with examples and explain in brief, how to empty the provided array.

var myArray = [1, 2, 3, 4, 5] // it may have any number of elements

Hints:

- Method 1: overwrite the array with empty array (shown below, don't use this as your answer)
- Method 2: by the length property method
- Method 3: using the splice Array method
- Method 4: by popping each member of the array in a loop.
- Method 5: anything you come up with

### Sample Answer:

            myArray = []    // will replace the original myArray with an empty array

### Answer:

Method2:
myArray.length = 0;

Method3:
myArray.splice(0,myArray.length);

Method4:
var counter = myArray.length;
for(var i = 0; i < counter; i++) {
  myArray.pop();
}