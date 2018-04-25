const express = require('express');
const router = express.Router();
const Todo = require('../models/model');
const Dep = require('../models/dp');
var crypto = require('crypto');
const passport = require('passport');

router.get('/home/:tab', function(req, res){
	Dep.find(function(err, dep){
		if (err)
			return (res.send(err))
		res.json(dep);
	})
});


router.post('/', function(req, res){
	const todo = new Todo();
	var hash = crypto.createHash('md5').update(req.body.p2).digest('hex');


	todo.login = req.body.p1;
	todo.password = hash;

	Todo.findOne({login:todo.login, password:todo.password}, function(err, todos) {
		var test = todos;
		if (err)
			return (res.send(err));		
		else if (String(test) == "null")
			return (res.send(err));
		else {
			res.redirect('/home');
		}		
	})
});

router.post('/:id', function(req, res){
	const todo = new Todo();
	var hash = crypto.createHash('md5').update(req.body.p4).digest('hex');

	todo.login = req.body.p3;
	todo.password = hash;
	todo.NumberPosition = req.body.p8;
	todo.site = req.body.p7;

	todo.save(function(err){
		if(err)
			return(res.send(err));
		res.redirect('/');
	})
});

router.post('/home/:dep', function(req, res){
	const dep = new Dep();

	dep.icao = req.body.f1;
	dep.name_airline = req.body.f2;
	dep.login = req.body.f3;
	dep.type = req.body.f4;
	dep.application = req.body.f5;
	dep.departus = req.body.f8;
	dep.return = req.body.f10;
	dep.td = req.body.f11;
	dep.tt = req.body.f12;

	dep.save(function(err){
		if(err)
			return(res.send(err));
		res.redirect('/home');
	})
});

module.exports = router;