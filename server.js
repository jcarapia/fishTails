var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(PORT, function(){
	console.log('the magic happens on port: ' + PORT);
});