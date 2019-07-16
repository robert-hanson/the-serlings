var express = require('express');
var router = express.Router();
const ContactManager = require('../managers/ContactManager');


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

// POST sent comment
router.post('/', function(req, res){
//   const to = req.body.to;
  const from = req.body.from;
  const subject = req.body.subject;
  const message = req.body.message;

  ContactManager.sendMailTest(from, subject, message);
  res.send("all good..");
});
module.exports = router;
