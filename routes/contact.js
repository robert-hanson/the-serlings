var express = require('express');
var router = express.Router();
const ContactManager = require('../managers/ContactManager');


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', {commentSaved: null});
});

// POST sent comment
router.post('/', async(req, res)=>{
    console.log(JSON.stringify(req.body));
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const date = new Date();
        await ContactManager.saveContactMessage(name, email, message, date);
        res.render('contact', {commentSaved: true});
    } catch(ex) {
        console.error('Something went wrong :(...\nError:' + JSON.stringify(ex));
        res.send({error: ex});
    }
});
module.exports = router;
