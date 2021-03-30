### Which of the following is true about setTimeout(cb, ms) JavaScript function?

1. The `setTimeout` function is used to run callback `cb` after at least `ms` milliseconds.

2. The return value of `setTimeout` is a numerical ID which can be used to cancel the timer by using the `clearTimeout` function.

3. The cb function is completed after all the other JS commands in the file are completed.

4. All of the above.

5. None of the above

### Please write your answer here:
4. All of the above.

# I ran case 3, and the cb function does seem to complete at the end.
# var myVar;
# 
# function myFunction() {
#   myVar = setTimeout(raceFunc, 0);
# }
# 
# function raceFunc() {
#     document.querySelector("p").textContent = "Me First!";
# //  alert("Hello!");
# }
# 
# function changeText() {
#     document.querySelector("p").textContent = "No You!";
# }
# 
# myFunction();
# changeText();

### Feedback:
Correct!