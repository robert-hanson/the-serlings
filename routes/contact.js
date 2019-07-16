var express = require('express');
var router = express.Router();
const ContactManager = require('../managers/ContactManager');


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

// POST sent comment
router.post('/', async(req, res)=>{
    console.log(JSON.stringify(req.body.date));
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const date = req.body.date;
        await ContactManager.saveContactMessage(name, email, message, date);
        res.send({error: null});
    } catch(ex) {
        console.error('Something went wrong :(...\nError:' + JSON.stringify(ex));
        res.send({error: ex});
    }
});
module.exports = router;
