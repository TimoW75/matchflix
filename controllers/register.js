const User = require('../models/user');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let session;

// Renders the registration page when going to /register
const registreren = (req, res) => {
    res.render('register');
};

// Registration function (stores everything in the database, creates new session & sends test email)
const register = async (req, res) => {
    console.log(req.body.name);
    // Encrypts newly made password
	const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const createUser = new User({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: hashedPassword
    });
    // Creates user and saves it in the database
    createUser.save((error) => {
        if (error) {
            console.error(error);
            return res.status(500).redirect('/register');
        } else {
            console.log("Registration is completed!")
            session = req.session;
            session.email = req.body.email;
            sendEmail(req.body.email).catch(console.error); // <--- Here
            return res.status(200).redirect('series');
        }
    });
};

// Test email function (sends registration email when someone finishes registration to test platform Ethereal)
async function sendEmail(email) {
    // Creates test account that can ben used on Ethereal
    let testAccount = await nodemailer.createTestAccount();
    
    // Settings to from where the email should be sent from (in this case to Ethereal)
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    
    // To which emailadress it should be sent and what content should contain in the email itself (since we use Ethereal it won't send real emails to users) 
    let info = await transporter.sendMail({
      from: '"Matchflix" <hello@matchflix.com>',
      to: email,
      subject: "Registration successful | Matchflix",
      text: "Welcome to Matchflix, " + email + "! Your account registration was successful!",
      html: "<b>Welcome to Matchflix, " + email + "! Your account registration was successful!",
    });
    
    // Few console logs provided for testing purposes, provides link to Ethereal where we can preview the email we sent
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {
    registreren: registreren,
    register: register,
};