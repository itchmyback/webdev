function greetings(name) {
    console.log("Hey " + name + ", how's it going?");
}

greetings("Jennifer");

function hai(age) {
    return("Hey I'm " + age);
}

// This doesn't show up - would have to console log it
hai(27);

// console logging the function output
function fullGreeting(age, name) {
    return "Hi " + name + ", I believe you are " + age + " years old.";
}
console.log(fullGreeting(27, "Jenny"));

function rectArea(length, width) {
    var area = length * width;
    return area;
}

console.log(rectArea(10,2));

// During his lesson, Jon emphasized that if the function doesn't return a result, 
// the below result wouldn't display anything
var result = rectArea(10,2);

// This writes to the page
document.write("The answer is " + result);

// function expression (previously using declaraion)
var hello = function() {
    console.log("How are you?");
}

hello();

// If we do this, we will lose our function
hello = 0;

// would be undefined
// hello();

// function scope
function hellar() {
    var blah = "It's early in the morning";
    console.log(blah);
}

hellar();

// but then if we try to console log with blah, blah is local to function
console.log(blah);

// redefining blah outside of fuction, now global
var blah = "Please give me coffee";
hellar();
console.log(blah);

// Higher Order Functions
function hi() {
    console.log("Will you be my friend?");
    console.log("Please? I'll give you money");
}

// setInterval(hi, 3000);

function har() {
    document.write("Yes");
    document.write("No");
}

// NOTE - again, the function argument is the name of the functionName, but not in the form of functionName()
// setInterval(har, 3000);

// Anonymous Functions - functions declared at run time, not named - so they are executed at runtime
// in a particular instance and can't be re-used
setInterval(
    function() {
//        console.log("Hello");
    }, 3000
)

