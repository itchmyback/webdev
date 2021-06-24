// https://www.passportjs.org/

const express = require( 'express' );
const app = express();

const mongoose = require( 'mongoose' );
const passport = require( 'passport' );
// strategies - the method of login
const LocalStrategy = require( 'passport-local' );
const passportLocalMongoose = require ( 'passport-local-mongoose' );

// Connection
const keys = require( './config/keys' );

mongoose
	// .connect( keys.mongoURI, { useNewUrlParser: true} )
	// if you see a warning, you may need to modify the above to:
	// there is indeed a warning, so
	.connect( keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
	.then( console.log( "Connect to database" ))
	.catch( (error) => console.log( error ));

// will require keys
app.use( express.urlencoded( { extended: true }));

// User and Password 
let User = require( './models/user' );

app.use( require( 'express-session' )({
	secret: "blah", // used to calculate the hash to protect our password
	resave: false,
	saveUnitialized: false
}));

app.use( passport.initialize() ); // start a session
app.use( passport.session() ); // allows access to the session

// can look on stack overflow for serialize-deserialize
passport.use( new LocalStrategy( User.authenticate() )); 
passport.serializeUser( User.serializeUser() ); // stores User object in session
passport.deserializeUser( User.deserializeUser() ); // removes User object in session

// Routes
app.get( '/', ( req, res ) => {
	res.render( 'home.ejs' );
});

// does not use isLoggedIn() - can go directly to route
app.get( '/hackable', ( req, res ) => {
	res.render( 'newsfeed.ejs' );
});

// uses isLoggedin() - cannot go directly to route
app.get( '/newsfeed', isLoggedIn, ( req, res ) => {
	res.render( 'newsfeed.ejs' );
});

// Sign Up - Get and Post
app.get( '/signup', ( req, res ) => {
	res.render( 'signup.ejs' );
});

// note on password hashing -- password not stored as password string,
// it's hashed first and then stored
// hashing is one way
// successfully made a user and password!
app.post( '/signup', (req, res) => {
	var newUser = new User( { username: req.body.username });
	// passport function register()
	User.register( newUser, req.body.password, ( err, user) => {
		if( err ) {
			console.log( err );
			return res.render( 'sgnup.ejs' );
		} else {
			passport.authenticate( "local" )( req, res, () => {
				res.redirect( '/newsfeed' );
			});
		}
	})  // end User.register
}) // end app.post

// Log In - Get and Post
app.get( '/login', ( req, res ) => {
	res.render( 'login.ejs' );
});

app.post( '/login', passport.authenticate( 'local', {
		successRedirect: '/newsfeed',
		failureRedirect: '/login'
	}), ( req, res ) => {
});

// Log Out - functions
app.get( '/logout', ( req, res ) => {
	req.logout(); // destroys all user data in session
	res.redirect( '/' );
});

// Must secure routes to prevent anyone from going directly
// to protected route
// use custom middleware function
function isLoggedIn( req, res, next) {
	if( req.isAuthenticated() ) {
		return next();
	}
	res.redirect( '/login' );
}

// Listener
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `listening on port ${port}` ));