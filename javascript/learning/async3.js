// Just call this whole file a big execution failure, maybe it has useful notes

// What does this actually demonstrate?
function change() {
    return new Promise( function( resolve, reject ) {
        // Setting 200 ms time
        setTimeout(resolve, 200);
    }).then( function() {
        console.log("Wrapped setTimeout after 200ms");
//    });
    }).catch( function() {
        console.log( "rejected", reject );
    }); 
}
// change();

// Is this any better?
/*
firstRequest(function(response) {  
    secondRequest(response, function(nextResponse) {    
        thirdRequest(nextResponse, function(finalResponse) {     
            console.log('Final response: ' + finalResponse);    
        }, failureCallback);  
    }, failureCallback);
}, failureCallback);
*/


// dafuq
let globalObj = {};
function getLinks( url ) {
    return new Promise( function( resolve,reject ) {
       let http = new XMLHttpRequest();
       http.onreadystatechange = function() {
            if(http.readyState == 4) {
              if(http.status == 200) {
                resolve(http.response);
              } else {
                reject( new Error() );
              }
            }           
       }
       http.open( "GET", url, true );
       http.send();
    });
}

getLinks( 'links.txt' )
.then(function( links ) {
    let all_links = ( JSON.parse( links ));
    globalObj = all_links;

    return getLinks( globalObj[ "one" ] + ".txt" );
})
.then( function( topic ) {
    writeToBody( topic );
    setTimeout( function() {
         return getLinks( globalObj[ "two" ] + ".txt" ); // without setTimeout it works fine 
         }, 1000 );
});


// Piyush lecture
// back to this problem I hope
console.log("1");
setTimeout( function() { console.log("2 - out of order because of setTimeout") }, 500 );
console.log("3");

// single threaded, one line at a time
// how does it support async?
function iris() {
	console.log( "Iris" );
}

function dee() {
	console.log( "Dee" );
}

function students() {
	console.log( "Taylor" );
//	setTimeout( iris, 1000 );
	setTimeout( iris, 0 );
	console.log( "Zach" );
	dee();
}

students();
// Taylor, Zach, Dee, Iris

// Piyush explanation
// setTimeout is a callback function, so gets put in a queue, so it's "later"

// All I/O should be non-blocking
// What's I/O?
// http requests
// database ops
// disk r/w
// setTimeout
// setInterval
// setImmediate

// thread execution asks the runtime to perform an I/O op,
// provides a callback function (without executing it) and then moves on

// nevermind, another example that won't work
/*
function students() {
	let doggHorse = "Doggy Horse"; // sync
	console.log( "Taylor" );
//	setTimeout( iris, 1000 );
	setTimeout( iris, 0 ); // async
	console.log( "Zach" );
	dee();
	fetch( 'www.yello.com', cb ); // async
}
*/

// Ticks - each time JS engine comes back to look for an event on the queue
// setTimeout( callback, time ) used as a stand-in for async b/c it has a callback
// which is placed on the event queue
// Could also use process.nextTick()

// synchronous model like ruby
// require 'faraday'
// res = Faraday.get 'http://www.google.com'
// puts res.body
// puts "Done"

// But for node.js
// nevermind, this throws an error
/*
var request = require( 'request' );
request( 'http://www.google.com' , function( err, res, body ) {
	console.log( body );
});
console.log( "Done!" );
*/
// Done!
// console.log( body )

// Promises
// callback hell
// nevermind, he's using node here
/*
var request = require( 'request' );

request( 'http://www.google.com' , function( err, res, body ) {
	runB( args, function() {
		runC();
		runD( args, function() {
			runE( args );
		});
	});
	console.log( body );
})
console.log( "Done!" );
*/

// promises go in the job queue
// callbacks 
// promise( resolve, reject )

// Promise Example
var promise1 = new Promise(
	// executor function
	function( resolve, reject ) {
		setTimeout( resolve, 3000, "foo" );
	}
);

// omg, why did I even write this all down, nothing works
/*
myPromise
	.then( value => { return value + " and bar"; })
	.then( value => { return value + " and bar again"; })
	.then( value => { return value + " and again"; })
	.then( value => { console.log( value ) })
	.catch()

// so, this throws an error, so....

var promise1 = 1;
var promise2 = getItems( inventoryItems );
var promise3 = Promise.resolve(
	rootNode.insertAdjacentHML( 
		"afterend", "Good morning class"
	)
);
var promise4 = fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
	.then( res => res.json() );
*/

// something semi complicated

// async/await example
async function run() {
	// make a http request which is async
	let todo1 = await fetch( 'https://jsonplaceholder.typicode.com/todos/1' );
	todo1 = await todo1.json()
	let todoData = await JSON.stringify( todo1, null, 4 )
	// fetch api requires you to explicitly convert to json
	// let todoData = await todo1.json();	
	rootNode.insertAdjacentHTML( "beforeend", todoData );
	rootNode.insertAdjacentHTML( "afterend", "<p>Done</p>" );
}
// we're missing catch

run();

// class not making sense b/c he's just blowing through it
// try/catch, async/await