var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var setupControllers = require('./controllers/setupControllers');
var apipController = require('./controllers/apiController');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

console.log(config.getDbConnectionString());

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });
setupControllers(app);
apipController(app);

app.set('view engine' , 'ejs');

app.listen(port);