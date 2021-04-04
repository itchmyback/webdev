// Foundation
const express = require('express');
const app = express();

console.log(process);

// get, post, 

// Routes
// app.get(route, callback() function)
// es6 notation
// app.get('/', (request, response => {
// })
app.get('/', (request, response) => {
	response.send("I am the root route!!!")
})


// app.post(',', "I am the route!!!")
	// do something
// })

// Listener

// app.listen(3000)
// Now, we need to specify some ports to listen on - port 3000

// After setting up basic server, we are setting up this environment var
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

//console.log(app);
