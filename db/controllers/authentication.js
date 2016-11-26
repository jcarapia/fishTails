const User = require('../models/user');
//const config = require('../../config');
const jwt = require('jwt-simple');
const secret = process.env.secret

function tokenForUser(user){
	const timeStamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timeStamp}, secret);
}

exports.signin = function(req, res, next) {
	//user has already had their emal and password auth'd
	// we just need to give them a token
	res.send({token: tokenForUser(req.user)});
};

exports.signup = function(req, res, next){
	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	if(!username || !password) {
		return res.status(422).send({error: 'You must provide username and password'})
	}

	//see if a user with the given email exists
	User.findOne({$or: [{username: username}, {email: email}]}, function(err, existingUser) {
		if(err) {
			return next(err);
		};

		//if a user with agiuven emai does exist, return an error
		if(existingUser){
			console.log('username is in use');
			return res.status(422).send({error: 'Username or Email is already in use'});
		}

		//if a user with email does not exist, create and save the user 
		const user = new User({
			username: username,
			email: email,
			password: password
		});

		user.save(function(err) {
			if(err){
				return next(err);
			}
			//respond to the request indicating that the user was cerated. 			
			res.json({token: tokenForUser(user)});
		})

	})


	
	
}