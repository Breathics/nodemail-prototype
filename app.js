// Require modules
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const { USERNAME, PASSWORD } = require('./config.js');

const app = express();
const PORT = 8000;


// Consume middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// If you're going to use your own gmail
// Create a dev email for testing, if needed
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public',))
})

// HTTP POST route to accept POST data from 
app.post('/email', (req, res) => {
  // Four important options for our mailOptions
  const mailOptions = {
    from: 'andy.lfz.test@gmail.com',  // Sender of the email 
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
  res.end();
});



app.listen(PORT, function(req ,res){
  console.log("Yo, we're cooking up something hot on PORT: ", PORT);
})

