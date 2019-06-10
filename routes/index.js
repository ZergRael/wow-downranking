var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'WoW Downranking' });
});

router.get('/spelldata/*', function(req, res, next) {
	fs.readdir("./assets/" + req.path, (err, data) => {
		res.send(data);
	});
});

router.get('/data/*', function(req, res, next) {
	fs.readdir("./assets/" + req.path, (err, data) => {
		res.send(data);
	});
});

router.get('/talents/*', function(req, res, next) {
	fs.readdir("./assets/" + req.path, (err, data) => {
		res.send(data);
	});
});


module.exports = router;
