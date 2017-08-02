// Require modules
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// If you're going to use your own email
// You may have to allow less secure apps
// My Account >> Sign-in & Security >> Connected apps & sites >> Allow less secure apps: ON

// You're free to use whatever service you would like
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR EMAIL HERE',     
    pass: 'YOUR PASSWORD HERE'  
  }                             
});


const mailOptions = {
  from: 'EMAIL BEING SENT FROM',
  to: 'EMAIL BEING SENT TO',
  subject: 'Check it out',
  text: 'Sup doood'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent successfully' + info.response);
  }
});


app.listen(PORT, () => {
  console.log("Firing up something hot on PORT: ", PORT);
});

