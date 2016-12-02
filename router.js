const Authentication = require('./db/controllers/authentication');
const Tale = require('./db/controllers/tale');
const passportService = require('./db/services/passport');
const passport = require('passport');

module.exports = function(app){

	app.post('/signin', passport.authenticate('local'), function(req, res){
		res.send(req.body.username);
	});

	app.post('/signup', Authentication.signup);

	app.get('/tales', Tale.fetchTales);

	app.post('/tales', isSignedIn, Tale.addTale, function(req, res){
		console.log(req.body)
	}); 

	app.get('/tales/:id', Tale.fetchTale);

	app.post('/isAuth', function(req, res){
		if(req.isAuthenticated()){
			res.send(true);
		} else {
			res.send(false);
		}
	});

	//=== isLoggedIn Middleware
	function isSignedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.send('Please sign in');
    }
	};
};