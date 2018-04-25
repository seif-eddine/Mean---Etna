var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const passport = require('passport');
//var crypto = require('crypto');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean:27017/todos');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log("Connection with database succeeded");
});

const TodoRoutes = require(__dirname + '/routes/route');

app.use(express.static(__dirname + '/public'));
app.use('/', TodoRoutes);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/home', function(req, res){
	res.sendFile(__dirname + '/public/home.html');
});


console.log("Server load on port 3000.");
app.listen(3000);
