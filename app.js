// Require modules
const nodemailer = require('nodemailer');
const { USERNAME, PASSWORD } = require('./config.js');

// If you're going to use your own gmail
// You have to allow less secure apps
// My Account >> Sign-in & Security >> Connected apps & sites >> Allow less secure apps: ON

// You're free to use whatever service you would like
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: USERNAME,     
    pass: PASSWORD  
  }                             
});

// Four important options for our mailOptions
const mailOptions = {
  from: 'aong93@gmail.com',         // Sender of the email
  to: 'andy.ong@learningfuze.com',  // Recipient of the email
  subject: 'It works',              // Subject of the email
  text: 'Sup doood',                // Message of the email
  // html: '<h1>SUP DOOOD</h1>'     // Can be used in place of the text
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent successfully' + info.response);
  }
});

