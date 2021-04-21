var bkg_array = [7];
for (var i = 1; i <= 6; i++) {
    bkg_array[i] = `url(image${i}.jpg)`;
    console.log(bkg_array[i]);
}
// bkg_array[0] = "url(background1.jpg)";

document.body.style.backgroundImage = bkg_array[1]; 
var counter = 1;


// Would a modulo setup be better here?
document.querySelector("#next").addEventListener("click", 
    function() {
        if(counter < 6 && counter > 0) {
            counter++;
        } else if(counter == 6) {
            counter = 1;
        } else { // counter > 6 or counter < 0, this should not happen
            alert("Fatal Error") ;
        }
        // alert(counter);
        document.body.style.backgroundImage = bkg_array[counter]; 
    }
);

document.querySelector("#back").addEventListener("click", 
    function() {
        if(counter < 7 && counter > 1) {
            counter--;
        } else if(counter == 1) {
            counter = 6;
        } else { // counter > 6 or counter < 0, this should not happen
            alert("Fatal Error") ;
        }
        // alert(counter);
        document.body.style.backgroundImage = bkg_array[counter]; 
    }
);
