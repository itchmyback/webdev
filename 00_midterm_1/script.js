var myVar;

function myFunction() {
  myVar = setTimeout(raceFunc, 0);
}

function raceFunc() {
    document.querySelector("p").textContent = "Me First!";
//  alert("Hello!");
}

function changeText() {
    document.querySelector("p").textContent = "No You!";
}

myFunction();
changeText();

function calc (a) {
  return function (b) {
    return function (c) {
      return a + b * c;
    };
  };
}

console.log(calc(2)(3)(4));

function lognum() {
  for(var i = 1; i <= 5; i++) {
    if(i % 2 == 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

// lognum();

function oddeven(a, b) {
  var output = {};
  var testOjbect = {"fname" : "john"};
  testObject 
  for (var i = Number(a); i <= Number(b); i++) {
    if (i % 2 == 0) {
      output.i = "even";
      console.log(i + " is even");
    } else {
      output.i = "odd";
      console.log(i + " is odd");
    }
  } // end for
  console.log(output);
  console.log(testOjbect);
  return output;
} // end function

// oddeven(1,5);

myArray = [1, 2, 3, 4, 5];
console.log(myArray);

var counter = myArray.length;
for(var i = 0; i < counter; i++) {
  myArray[i] = '';
}
console.log(myArray);
console.log(myArray.length);

for(var i = 0; i < counter; i++) {
  myArray.pop();
}
 console.log(myArray);

myArray.splice(1,myArray.length);
console.log(myArray);

myArray.length = 0;
console.log(myArray);

var yourArray = ["a", "b", "c", "d", "e"];

// push
yourArray.push("f");

console.log(yourArray);

// concat
var gArray = ["g"];
yourArray = yourArray.concat(gArray);

console.log(yourArray);

// spread
yourArray = [...yourArray, "h"];

console.log(yourArray);

// splice
yourArray.splice(yourArray.length, 0, "i");

console.log(yourArray);

// remove specified index
yourArray.splice(3, 2)

console.log(yourArray);

document.querySelector("p:nth-of-type(odd)").style.backgroundColor = "#ddd";