'use strict'

var nodemailer = require('nodemailer');
var config = require('../config');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'theserlingsband@gmail.com',
           pass: config.EMAIL_PASSWORD
       }
   });


exports.emailNotification = (body)=>{
    const mailOptions = {
        // from: from, // sender address
        to: 'theserlingsband@gmail.com', // list of receivers
        subject: 'NOTIFICATION - MESSAGE FROM WEBSITE', // Subject line
        html: body // plain text body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

