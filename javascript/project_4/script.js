//  var x = 0;

//  function tick() {
//  	x++;
// 	// document.write(Number(x));
// 	console.log(x);
//  }
//  setInterval(tick, 3000);

var bkg_array = [];
bkg_array[0] = "url(background1.jpg)";
bkg_array[1] = "url(background2.jpg)";
bkg_array[2] = "url(background3.jpg)";

// This is ultimately the true counter index. This needs to be initialized to 1.
// See below for the reason. 
// var counter = 0;
var counter = 1;

document.body.style.backgroundImage = bkg_array[0]; 
// The below notation targets the backgroundImage defined in the .container class
// How to target the in use backgroundImage regardless of selector?
// document.querySelector(".container").style.backgroundImage = "url(background2.jpg)";

// alert(document.body.style.backgroundImage);

// Start the index counter with 1 because 0 is the initialized value at the start
// before setInterval kicks in
// But - I had bad logic here. OOPS. I initialized 'i = 1', which doesn't matter because
// it will get evaluated based on counter.
// var i = 1;
// var i = 0;

function switch_bkg() {
	i = counter % 3;	
	document.body.style.backgroundImage = bkg_array[i]; 
	console.log(i);
	console.log(bkg_array[i]);
	counter++;
//	console.log(counter);
}

// note - setInterval does not require a function call in the form of function()
// note - so the parenthesis should be left off
setInterval(switch_bkg, 3000);