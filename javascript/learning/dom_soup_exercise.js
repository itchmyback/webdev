// Events
// clicking on a page, pressing a key, hovering over links
// twofold process - select an element and then add an event listener
// What are the addEventListener inputs?

// document.querySelector("button").addEventListener("click", 
    // function() {
        // alert("How's it going?")
    // }
// );

document.querySelector(".hide_button").addEventListener("click", 
    function() {
//        alert("How's it going?")
        // document.querySelector("img").src="soup.jpg";
        document.querySelector(".soup").src="nosoup.jpg";
    }
);

// I barely got the image to change with a button click
// I don't have a check box with status and can't bring the image back

// learning new event called change
document.querySelector("#hide").addEventListener("change", 
    function() {
        // experiment - can also just do a default statement here and then only do an "if"
//        document.querySelector(".soup").style.display = "block";
        // checked is a method of the form?
        if(document.querySelector("#hide").checked) {
            // now will use a display property from CSS, never seen these
            // WAIT - we've seen display: inline, block - now can use "none"
            // recall - CSS styles require style property
            document.querySelector(".soup").style.display = "none";
// Jon uses if-else
       }  else {
           document.querySelector(".soup").style.display = "block";
        } // end if
    }) 