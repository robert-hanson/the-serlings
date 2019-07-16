var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const endDatetime = process.env.END_DATETIME || "Jul 3, 2019 15:00:00";
  res.render('landing-page', { endDate: endDatetime });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {});
});

/* GET shows page. */
router.get('/shows', function(req, res, next) {
  res.render('shows');
});

module.exports = router;
