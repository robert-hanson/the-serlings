var express = require('express');
var router = express.Router();
const BOOSTRAP_VERSION = 3;

/* GET home page. */
router.get('/', function(req, res, next) {
  const endDatetime = process.env.END_DATETIME || "Jul 3, 2019 15:00:00";
  res.render('index', { endDate: endDatetime, bootstrap_version: BOOSTRAP_VERSION });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {bootstrap_version: BOOSTRAP_VERSION});
});



/* GET shows page. */
router.get('/band', function(req, res, next) {
  res.render('band', {bootstrap_version: BOOSTRAP_VERSION});
});


module.exports = router;
