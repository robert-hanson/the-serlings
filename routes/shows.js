var express = require('express');
var router = express.Router();
const ShowsManager = require('../managers/ShowsManager');

/* GET shows page. */
router.get('/shows', function(req, res, next) {
    res.render('shows');
  });

/* GET contact page. */
router.get('/upcoming', async(req, res, next) => {
  res.json(await ShowsManager.getUpcomingShowsAsync());
});


module.exports = router;
