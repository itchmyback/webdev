// Question -- what does require return? It returns an "exports" object
const express = require( "express");
// Question -- what does express() return? an object - So "app" is an object
const app = express();

const logger = require( "morgan" );
// Question - what does app.use do? For an object {key: function}, it allows access to those functions
app.use( logger( "dev" ));

app.use( express.urlencoded( { extended: false }));
app.use( express.json());

app.use( express.static( "../client" ));

// Convert to POSTGRES
// 1. Build connection
	// a. install PG
	// b. connect

// Connection
const pg = require( 'pg' );

// const client = pg.client;
const Client = pg.Client; // capitilization
// or object var
// // const {client} = pg;
// const {Client} = pg;

// shortcut notation
// // const {client} = require( 'pg' );
// const {Client} = require( 'pg' );

// tells us how to connect to our postgres
const connectionObject = {
	host: 'pgdb.accsoftwarebootcamp.com',
	port: 5432,
	database: "acc",
	user: "acc",
	password: "accrocks"
}

// creates a connection
const conn = new Client( connectionObject ); // Client is not defined
// const conn = new client( connectionObject ); // client is not a constructor
	// returns a promise
	// conn.connect().then().catch()
conn.connect()
  // .then( 
	// console.log( "connected to the postgres database " + connectionObject.database )
	// )
  .then( function() {
        console.log( 'connected to the postgres database ' + connectionObject.database )
      })
	// .catch( 
	// 	console.log( "epic fail" )
	// );
  .catch( function( err ) {
        console.log( 'we epically failed to connect to pgdb' + err )
      });

// Question - what is middleware?
// Middleware runs between request and response
// app.get( "/todos",( req, res, checkIfThisClientIsAuthenticated) => {
	// let query = 'SELECT * FROM hr.todos'
  // checkIfThisClientIsAuthenticated -- this is all middleware
  // All the app.use() above are also middleware, depending on when they are executed

// Back in the day, people used node without express, maybe that's the equivalent of using php?

// read - GET
app.get( "/todos", ( req, res ) => {
	// something
	// It failed or something
	// let query = 'SELECT * FROM hr.todos'
  // need to solve "_id" issue, will add extra aliased column todo_id AS _id
  // this will then get appended as data parameters to "data-id = todo._id"
	// let todos_query = 'SELECT * FROM hr.todos'
  // use back ticks for multiline
	let todos_query = `SELECT todo_id, todo_id AS _id, description, is_complete
                    FROM hr.todos`;
  // make a request to the PostGRES db
  // returns a promise
	conn.query( todos_query )
  // if the promise'd action is successful
  // then run the anonymous function inside
	.then( function( todos ) {
//		console.log( todos )
		console.log( todos.rows )
//	res.json( todos )
	  res.json( todos.rows )
	})
  // if the promise'd action was a failure
  // then run the anonymous function
	.catch( function( err ) {
		console.log( "epic fail :" + err )
	})
});

// create - POST
app.post( '/todos', function( req, res ) {
  // get the text of the new todo from the body
  let newTodoDescription = req.body.description
  // is description even there?
  if( !newTodoDescription ) {   // "", null, undefined, false, 0
    res.status(404).json( { message: "I need a valid todo", code: 12404 }) // looked up error codes
  } else {
    // create an INSERT SQL query, with backticks? required for multiline
    let query = `
    INSERT INTO hr.todos ( description, is_complete, user_id )
    VALUES ( '${newTodoDescription}', false, 2 )
    `
    // conn.query( queryStr )
    conn.query( queryStr, function( err, todos ){
      if( err ) {
        console.log( "An error occurred in INSERT query", err )
      } else {
        console.log( "todos is: ", todos )
        // do this assignment with "_id", does it have to be todos?
        // we link todo to todos
        let todo = todos.rows[0];
        todo._id = todo.todo_id;
        res.status( 201 ).json( todos.rows[0] )
      }
    })
    // What's wrong with below?
    /*
    .then( function( todos ) {
      console.log( "todos is: ", todos )
    })
    .catch( function( err ) {
      console.log( "An error occured in INSERT query", err )
    })
    */
  }
})

const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `App on port ${port}` ));
