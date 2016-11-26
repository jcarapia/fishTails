const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taleSchema = new Schema({
	title: String,
	picture: String,
	story: String
});

const Tale = mongoose.model('tale', taleSchema);

module.exports = Tale;

