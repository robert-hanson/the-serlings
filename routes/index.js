var express = require('express');
var router = express.Router();

const config = require('../config');


/* GET home page. */
router.get('/', function(req, res, next) {
  const endDatetime = process.env.END_DATETIME || "Jul 3, 2019 15:00:00";
  res.render('index', { endDate: endDatetime, bootstrap_version: config.BOOTSTRAP_VERSION });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {bootstrap_version: config.BOOTSTRAP_VERSION});
});



/* GET shows page. */
router.get('/band', function(req, res, next) {
  res.render('band', {bootstrap_version: config.BOOTSTRAP_VERSION});
});


module.exports = router;
