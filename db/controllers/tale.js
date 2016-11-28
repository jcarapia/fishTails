const Tale = require('../models/tale');

exports.addTale = function(req, res, next) {
	const title = req.body.title;
	const picture = req.body.picture;
	const story = req.body.story;

	if(!title || !picture || !story ) {
		return res.status(422).send({error: 'You must provide title, picture and story'})
	};

	const tale = new Tale({
		title: title,
		picture: picture,
		story: story
	});

	tale.save(function(err){
		if(err) {
			return next(err);
		};

		res.send('New tale successfully created!');
	});
};

exports.fetchTales = function(req, res) {
	Tale.find(function(err, tales) {
		if(err) {
			return next(err);
		};
		res.send(tales);
	})
};

exports.fetchTale = function(req, res) {
	const id = req.body.id;
	Tale.findById(id, function(err, tale){
		if(err){
			return next(err);
		};
		res.send(tale);
	})
}




