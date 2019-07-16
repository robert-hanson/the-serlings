const Mailer = require('./Mailer');
const DirectMessagesRepo = require('../models/DirectMessages');


exports.saveContactMessage = async(name, email, message, date)=>{
    await saveCommentAsync(name, email, message, date);
    sendEmail(name, email, message, date);
};

const saveCommentAsync = async(name, email, message, date)=>{
    console.log('saving contact message...');
    const comment = {
        name: name,
        email: email,
        message: message, 
        submitted_on: date
    };
    console.log('Saved comment: ' + JSON.stringify(comment));
    await DirectMessagesRepo.create(comment);

};


const sendEmail = (name, email, message, date)=>{
    console.log('sending email...');    
    // create email body 
    const body =    
    `<h2>Message Received!</h2>
     <p><strong>Name:</strong></p>
     <p>${name}</p>
     <p><strong>Email:</strong></p>
     <p>${email}</p>
     <p><strong>Date:</strong></p>
     <p>${date}</p>
     <p><strong>Message:</strong></p>
     <p>${message}</p>`;
    Mailer.sendContactMessageEmail(body);
};