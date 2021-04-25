// NOTE: Original trial class code


// is $ JQUERY? is this some sort of PERL throwback? Oh, it's potentially template literal
// More jquery
// $(this) refers to back to the DOM query element
// click() is a jQuery method
// .data("key")

const baseUrl = 'http://localhost:3000';

// CREATE

// select input, if they press key and let go, run the function
// event is a giant object which has lots of info inside
// what is "13"? It's the value of carriage return
$('input').keypress(function (event) {
	// get info
//    if (event.which === 13 && $(this).val() !== "") {
	if (event.which === 13 && $(this).val()) {
//    var todoItem = $(this).val();

		// newTodoItem gets matched to description as an object 
        let newTodoItem = {
            description: $(this).val()
        };

        // After coding the READ section, coming back to update with fetch
        let endpoint = `${baseUrl}/todos`;

	    // modify so that we can use POST
		// because method = POST must be specified in fetch
	//    fetch(endpoint)
	    // when using POST method, request object is in body - req.body
	    // on backend, to get this data, need to use req.body and must have body-parser
	    // What is all this really?
	    fetch(endpoint, {
	        method: 'POST',
//	        body: JSON.stringify(todoItem),
	        body: JSON.stringify(newTodoItem),
	        headers: {
	            'Content-Type': 'application/json'
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
	        $('ul').append(
	            // `<li>${todoItem}<span><i class='far fa-trash-alt'></i></span></li>`

				// modify with data attributes - data attributes add meta data to the html
				// by adding in data-id
	            `<li>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
	            // `<li data-id=${newTodo.id}>{newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
	             );
		    $('input').val("");
	    })
	    .catch(function(error) {
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

	// Don't need method = GET because GET is default for fetch
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
			// add this 'finished' logic variable here so that the read is in an accurate state from database
			let finished = todo.isComplete ? "completed" : "";
    		$('ul').append(
	       	 	//`<li>${todoItem}<span><i class='far fa-trash-alt'></i></span></li>`
				// and then add data-id so that app refreshes with id when read
   	    	 	// `<li>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
				// THIS ERROR HERE - caused issues with UPDATE
   	    	 	// `<li data-id=${todo} class=${finished}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
   	    	 	`<li data-id=${todo.id} class=${finished}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
       	 	);
		});
    }) 
    .catch(function(error) {
        // do something with error
        console.error("Issues READING the data.", error);n
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


// Issues with UPDATE response, and it seems like it was due to the READ

// proper - this now refers to the li
$('ul').on('click', 'li', function() {

	// debug
	let exp = $(this).data("foo", 52);
	console.log(exp);
	// w.fn.init [li]
	// 0: li
		// id: ""
	// length: 1
	console.log($(this).data("foo"));
	// 52
// oops, can't use parent(), 
//	let thisId = $(this).parent().data('id');
	let thisId = $(this).data('id'); // What is going on here? this = li, data(), 'id' is a key presumably, but maybe it's an object?
	console.log($(this).data);
	// ƒ (e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r…
	console.log(thisId);
	// [object
	// why is is it an object with just an open square array bracket?
	console.log({thisId});
	// {thisId: "[object"}
	// still has that [object notation, and also why is it in quotes
	let endpoint = `${baseUrl}/todos/${thisId}`;

	// There is a scoping issue with "this"
	console.log("This outside", this);
	let self = this;

	fetch(endpoint, {
		method: 'PUT'
	})
	.then(function(response) {
		if(!response.ok) {
			throw Error("Cannot update");
		} else {
			console.log("Response is okay");
			return response.json();
		}
	})
	.then(function(data) {
		// do something with data

		// moved inside function(data)
    	// $(this).toggleClass('completed');
		// fix this scoping error
    	$(self).toggleClass('completed');
	})
	.catch(function(error) {
		console.error("Issue with updating from backend");
	})

	// move inside function(data)
   	// $(this).toggleClass('completed');

});


// DELETE
// target the span because it contains the trash can icon as well
// 'this' targets span
$('ul').on('click', 'span', function (event) {
	// Adding fetch on top of remove()
	
	// how to get id?
	// let endpoint = `${baseUrl}/todos/id`;

	// let's add in stopPropogation event for bubbling, whatever that is
	event.stopPropagation();
	let thisId = $(this).parent().data('id');
	console.log(thisId);
	// [object
	console.log({thisId});
	// {thisId: "[object"}
	let endpoint = `${baseUrl}/todos/${thisId}`;

	// There is a scoping issue with "this"
	console.log("This outside", this);
	// This outside <span>​…​</span>​</span>​

	let self = this;

	// must specify DELETE method inside the fetch, only GET doesn't have to specified bc it's default
	// fetch(endpoint)
	fetch(endpoint, {
		method: "DELETE"
	})
	.then(function(response) {
		if(!response.ok) {
			throw Error("Cannot delete");
		} else {
			return response.json();
		}
	})
	.then(function(data) {
		// do something with data
		console.log(data);
		// (2)
		// 0: {id: 1, description: "Call mom", isComplete: false}
		// 1: {id: 2, description: "Buy groceries", isComplete: false}


    // $(this).parent().remove();
		// fix this scoping error
    	$(self).parent().remove();
	})
	.catch(function(error) {
		console.error("Issue with deleting from backend");
	})

	// move inside function(data)
    // $(this).parent().remove();
});
