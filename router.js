const Authentication = require('./db/controllers/authentication');
const Tale = require('./db/controllers/tale');
const passportService = require('./db/services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){

	// app.get('/', requireAuth, function(req, res) {
	// 	res.send({message: 'super secret code is abc123'});
	// });

	app.post('/signin', requireSignin, Authentication.signin);

	app.post('/signup', Authentication.signup);

	app.get('/tales', Tale.fetchTales);

	app.post('/tales', Tale.addTale, function(req, res){
		console.log(req.body)
	}); // add authorization to this route

	app.get('/tales/:id', Tale.fetchTale);
};