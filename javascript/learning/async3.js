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


