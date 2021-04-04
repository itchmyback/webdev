// Changing event to input from keyup
// Event listener event was input, oninput doesn't work
document.querySelector("#pounds").addEventListener("input", function(event) {
    // alert("Gratz");
    var lbsInput = document.querySelector("#pounds").value;
    var kgOutput = lbsInput / 2.2;

//    document.querySelector(".kg").textContent = kgOutput;
    // Well this was tricky, instead of targeting textContent, must target value >:(
    document.querySelector("#kilograms").value = kgOutput.toFixed(2);
})

document.querySelector("#kilograms").addEventListener("input", function(event) {
    // alert("Gratz");
    var kgInput = document.querySelector("#kilograms").value;
    var lbsOutput = kgInput * 2.2;

    document.querySelector("#pounds").value = lbsOutput.toFixed(2);
})

document.querySelector("#miles").addEventListener("input", function(event) {
    var milesInput = document.querySelector("#miles").value;
    var kmOutput = milesInput * 1.6;

    document.querySelector("#kilometers").value = kmOutput.toFixed(2);
})

document.querySelector("#kilometers").addEventListener("input", function(event) {
    var kmInput = document.querySelector("#kilometers").value;
    var milesOutput = kmInput / 1.6;

    document.querySelector("#miles").value = milesOutput.toFixed(2);
})

// Scratch Work

// document.querySelector("#weight").addEventListener("keyup", function(event) {
    // comment out by changing keyup to submit
 document.querySelector("#weight").addEventListener("submit", function(event) {
    var lbsInput = document.querySelector("#pounds").value;
    // console.log(poundsInput);
    var kgInput = document.querySelector("#kilograms").value;
    // console.log(kgInput);

    var kgOutput = lbsInput * 2.2;
    var lbsOutput = kgInput / 2.2;

    // This is to test out changing an output field with converted values
//    document.querySelector(".kg").textContent = kgOutput;
})
