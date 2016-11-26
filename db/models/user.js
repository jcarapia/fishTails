const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// Define our model 
const userSchema = new Schema({
	username: {type: String, unique: true, lowercase: true}, 
	email: {type: String, unique: true, lowercase: true}, 
	password: String
})

//on save hook, encrypt password
userSchema.pre('save', function(next) {
	const user = this;
	//generate a salt, then run callback
	bcrypt.genSalt(10, function(err, salt){
		if(err) {return next(err);}
		//hash (encrypt) the password using the salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) {return next(err);}
			//overwrite plain text password with encrypted password
			user.password = hash;
			//save the model 
			next();
		})
	})
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if(err) {return callback(err); }

		callback(null, isMatch);
	})
};
// Create the model class 
const User = mongoose.model('user', userSchema)


// Export the model 
module.exports = User;