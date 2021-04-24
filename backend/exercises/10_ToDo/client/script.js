// NOTE: Original trial class code


// is $ JQUERY? is this some sort of PERL throwback? Oh, it's potentially template literal

const baseUrl = "http://localhost:3000";

// CREATE

// select input, if they press key and let go, run the function
// event is a giant object which has lots of info inside
// what is "13"? It's the value of carriage return
$("input").keypress(function (event) {
	// get info
    if (event.which === 13 && $(this).val() !== "") {
//    if (event.which === 13 && $(this).val()) {
//    var todoItem = $(this).val();
        let newTodoItem
    
        // After coding the READ section, coming back to update with fetch
        let endpoint = `${baseUrl}/todos`;

	    // modify so that we can use POST
	//    fetch(endpoint)
	    // when using POST method, request object is in body - req.body
	    // on backend, to get this data, need to use req.body and must have body-parser
	    // What is all this really?
	    fetch(endpoint, {
	        method: "POST",
	        body: JSON.stringify(todoItem),
	        headers: {
	            'Content-Type': 'applicaton/json'
	        }
	    })
	    .then(function(response) {
	        if(!response.ok) {
	            throw Error("Issues!!!!");
	        } else {
	            return response.json();
	        }
	    })
	    .then(function(newTodo) {
	        // do something
	        // below is the original code
	        $("ul").append(
	            // `<li>${todoItem}<span><i class='far fa-trash-alt'></i></span></li>`
	            `<li>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
	             );
		    $("input").val("");
	    })
	    .catch(function(error){
	        console.error("Issues with CREATING data on backend");
	    })

	// set info
	// this gets moved into function(newTodo)
	//    $("input").val("");
    }
});

// READ
// ???
// https shouldn't work... but it does?
// const baseUrl = "https://localhost:3000";
// Well, we loaded the base image, not the endpoint, so maybe the base URL just loads index.html
// http vs https may come into play when we call the endpoint


$(document).ready(function() {
    // What's endpoint?
    let endpoint = `${baseUrl}/todos`;
    fetch(endpoint)
    // anonymous function with parameter response
    .then(function(response){
        if(!response.ok) {
            throw Error("No response")
        } else {
            return response.json();
        }
    })
    .then(function(dataArray) {
        // do something!
        console.log(dataArray);
		// start server, load index.html, and now
		// create items, and, can steal from the CREATE section
		// also, let's get rid of any items that came default from html with empty()
		$('ul').empty();
		dataArray.forEach(function(todo) {
    		$("ul").append(
	       	 	//`<li>${todoItem}<span><i class='far fa-trash-alt'></i></span></li>`
   	    	 	`<li>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
       	 	);
		});
    }) 
    .catch(function(error) {
        // do something with error
        console.error("Issues READING the data.", error)
    })

})



// UPDATE
// ul, if click, then li - what is li role?
// bad example --
// $("ul").on("click", function () {
// this refers to ul
// What happens is if anyplace in the ul is clicked, it marks all the li as completed
// Not what we want

// What about this?
// $("li").on("click", function () {
// It seems to work - but, what if there are no li inside the ul? Will it crash? There is always a ul


// proper - this now refers to the li
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


// DELETE
// target the span because it contains the trash can icon as well
$("ul").on("click", "span", function (event) {
    $(this).parent().remove();
});
