const mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");


const Schema = mongoose.Schema;

// Define our model 
const userSchema = new Schema({
	username: {type: String, unique: true, lowercase: true}, 
	email: {type: String, unique: true, lowercase: true}, 
	password: String
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

module.exports = User;
