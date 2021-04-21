function return5() {
    return 5;
}

console.log(return5());

// shorthand
var return6 = () => 6;

console.log(return6());

// this syntax doesn't work
// let return7  => 7;

// console.log(return7());

function consolelog5() {
    console.log("5");
}

consolelog5();

function consolelognum5() {
    console.log(5);
}

consolelognum5();

function doubler(arg0) {
    return arg0 * 2;
}

console.log(doubler(5));

// If not typecast to number, can still work if all arguments are numbers
function sum_of_3(arg0, arg1, arg2) {
    return  Number(arg0 + arg1 + arg2);
}

console.log(sum_of_3(2, 4, 6));

// arguments - thought it was an array, but it's an array like object
function sum_n() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = Number(sum + arguments[i]);
    }
    return sum;
}

console.log(sum_n(2, 3, 7, 9, 14, -3, 81));

// we tried parseInt - what's the problem with parseInt?
// a15 is not 15, it will come out as null

// We can do a type check to ensure the arguments are of the proper type -- typeof