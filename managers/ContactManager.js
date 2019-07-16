const Mailer = require('./Mailer');

exports.sendMailTest = (from, message)=>{
    // create email body 
    const body = `<p>${message}</p>`;
    Mailer.sendEmail(from, message);
};