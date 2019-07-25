var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index');
});



/* GET shows page. */
router.get('/band', function(req, res, next) {
  res.render('band');
});


module.exports = router;
