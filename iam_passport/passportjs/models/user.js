const mongoose = require( 'mongoose' );
const passportLocalMongoose = require( 'passport-local-mongoose' );

let UserSchema = new mongoose.Schema({ 
	username: String,
	password: String
});

// what is this plugin method?
UserSchema.plugin( passportLocalMongoose );

module.exports = mongoose.model( 'User', UserSchema );