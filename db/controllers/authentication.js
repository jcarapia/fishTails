const User = require('../models/user');
//const config = require('../../config');
const passport = require('passport');

//const secret = process.env.secret || config.secret

// exports.signin = function(req, res, next) {
// 	//user has already had their emal and password auth'd
// 	// we just need to give them a token
// 	res.send({token: tokenForUser(req.user), username: req.user.username});
// };

exports.signup = function(req, res, next){
	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	if(!username || !password) {
		return res.status(422).send({error: 'You must provide username and password'})
	};

	User.register(new User({username: username, email: email}), password, function(err, user){
    if(err){
      console.log(err)
      res.send(err);
    }else {
      passport.authenticate("local")(req, res, function(){
      	res.send('new user successfully created')
      });
    };    
  });
};
