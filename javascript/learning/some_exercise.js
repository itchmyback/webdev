var pets = ["Moxxi", "Pickle", "Hootchie"];

var newPets = ["Bear", "Monkeybutt"];

var num = 20;
var nameArr = ["John", "Luke", "Kate", "Annie"];

// let's start with skeleton code
// add a named function

// function addPets() {
// };

// addPets();

// then add arguments to function invocation
// addPets(pets, newPets);

// add parameters to accept arguments to function
// function addPets(arr1, arr2) {
// }

// test
// function addPets(arr1, arr2) {
//     console.log(arr1, arr2);
// }

// addPets(pets, newPets);
// passed

// goal is to concat the arrays
// arr1.concat(arr2);
// This will combine arr2 into arr1

// This does not give expected results
// arr1 and arr2 are meaningless
// I had a crap explanation for this previously
// The real explanation is that concat does not modify the array
// So the lesson here was supposed to be about global vars and the arguments,
// but it may not be accurately represented.
function addPets0(arr1, arr2) {
    pets.concat(newPets);
    console.log(pets);
}

addPets0(pets, newPets);
console.log(pets.concat(newPets));
console.log(pets);

// But internet claims you can modify global vars - yes, confirmed
function modifyGlobal() {
    num = 100; 
    console.log(num);
    console.log(nameArr);
    nameArr = ["Shut", "Up"];
    console.log(nameArr);
};

modifyGlobal();

// We know what the lesson is, but what's a better way to represent.
// kind of tricky - how to properly represent scoping
// I think the only way to represent this is to use function arguments named the same
// as global vars
function scopepets(pets, newPets) {
    // still not sure how to represent this
}

// Now use arguments passed into function
function addPets1(arr1, arr2) {
    var petArray = arr1.concat(arr2)
    petArray.forEach(function(element) {
        console.log(element);
    })
}

addPets1(pets, newPets);

// Now add conditional for the length of the names
function addPets2(arr1, arr2) {
    var petArray = arr1.concat(arr2)
    petArray.forEach(function(element) {
        if (element.length > 5) {
            console.log(element);
        } else {
            // do something else
            console.log("Name Too Short");
        };
    });

}

addPets2(pets, newPets);

