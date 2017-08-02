// Require modules
const nodemailer = require('nodemailer');

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
  from: 'EMAIL COMING FROM AUTH', // May not even need to include it here
  to: 'EMAIL SENDING TO',
  subject: 'It works',
  text: 'Sup doood'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent successfully' + info.response);
  }
});

