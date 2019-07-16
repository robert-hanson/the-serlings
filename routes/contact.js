var express = require('express');
var router = express.Router();
const ContactManager = require('../managers/ContactManager');


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

// POST sent comment
router.post('/', function(req, res){
  console.log('to: ' + req.body.from);
  console.log('message: ' + req.body.message);
//   const to = req.body.to;
  const from = req.body.from;
  // const subject = req.body.subject;
  const message = req.body.message;

  ContactManager.sendMailTest(from, message);
  res.send({error: null});
});
module.exports = router;
