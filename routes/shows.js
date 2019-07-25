var express = require('express');
var router = express.Router();
const ShowsManager = require('../managers/ShowsManager');
const config = require('../config');


/* GET shows page. */
router.get('/', async(req, res, next) =>{
    try {
        const shows = await ShowsManager.getUpcomingShowsAsync();
        res.render('shows', {shows: shows, bootstrap_version: config.BOOTSTRAP_VERSION});
    } catch (ex){
        return console.error('Something went wrong: ' + JSON.stringify(ex));
    }
  });


router.get('/upcoming', async(req, res, next) => {
  res.json(await ShowsManager.getUpcomingShowsAsync());
});


module.exports = router;
