var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(path.resolve('public/pages/index.html'));
  //res.sendFile(__dirname + "/../" + "public/pages/index.html");
  res.sendFile(path.resolve('public/pages/index.html'));
});

module.exports = router;
