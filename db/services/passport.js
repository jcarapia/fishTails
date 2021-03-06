const passport = require('passport');
const User = require('../models/user');
//
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const secret = process.env.secret || config.secret;

//create local strategy
const localOptions = {usernameField: 'username'};
const localLogin = new LocalStrategy(localOptions, function(username, password, done){
// Verify this username and password, call done with user
// if it is the correct email and password
// otherwise, call done with false
	User.findOne({username: username}, function(err, user){
		if(err) {return done(err);}
		if(!user) {return done(null, false);}

		//compare passwords
		user.comparePassword(password, function(err, isMatch){
			if(err) {return done(err);}
			if(!isMatch) {return done(null, false);}

			return done(null, user);
		});
	});
});

// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	// See if the user id in the paulaod exists inthe db
	// if it does, call done with that other
	//otherwise, call done without a user object
	User.findById(payload.sub, function(err, user){
		if(err) {return done(err, false);}

		if(user){
			done(null, user);	
		} else {
			done(null, false);
		}
	});
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);