var color_array = [
 '#4FC3F7',
 '#29B6F6',
 '#03A9F4',
 '#039BE5',
 '#0288D1',
 '#0277BD',
 '#01579B',
 '#9575CD',
 '#7E57C2',
 '#673AB7',
 '#5E35B1',
 '#512DA8',
 '#4527A0',
 '#311B92',
 '#7986CB',
 '#5C6BC0',
 '#3F51B5',
 '#3949AB',
 '#303F9F',
 '#283593',
 '#1A237E',
 '#64B5F6',
 '#42A5F5',
 '#2196F3',
 '#1E88E5',
 '#1976D2',
 '#1565C0',
 '#0D47A1'
];

// Initialize the background
var counter = 0;
document.body.style.backgroundColor = color_array[counter % 28]; 

// Initialize the time
var time = new(Date);
document.querySelector(".div_time").textContent = time.toTimeString().substring(0, 8);

// It seems like you have to constantly get the time
function tick() {
	time = new(Date);
	document.querySelector(".div_time").textContent = time.toTimeString().substring(0, 8);
	counter++;
	document.body.style.backgroundColor = color_array[counter % 28]; 
	// test the color tick
	document.querySelector(".counter").textContent = color_array[counter % 28];

};

setInterval(tick, 1000);

/*
function sayYolo() {
	document.querySelector("div").textContent = "yolo"
}
function sayBro() {
	document.querySelector("div").textContent = "bro"
}

setInterval(sayYolo, 1000);
setInterval(sayBro, 1500);
*/
