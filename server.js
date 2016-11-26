const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');


const port = process.env.PORT || 8080;
const app = express();

// DB setup
const username = process.env.dbusername || config.username;
const password = process.env.dbpassword || config.password;
mongoose.connect('mongodb://'+username+':'+password+'@ds111188.mlab.com:11188/fishtails');

// App setup
app.use(cors());
//morgan is used for debugging - it logs incoming requests
app.use(morgan('combined'));
//any request that is coming is going to be parsed as if it were json
app.use(bodyParser.json({type: '*/*'}));
//router(app);

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const server = http.createServer(app);
server.listen(port);
console.log('Server started');
