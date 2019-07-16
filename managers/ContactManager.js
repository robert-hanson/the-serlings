const Mailer = require('./Mailer');

exports.sendMailTest = (from , subject, message)=>{
    console.log('did we get here?');
    // create email body 
    const body = `<p>${message}</p>`;
    Mailer.sendEmail(from , subject, body);
};