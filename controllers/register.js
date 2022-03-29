const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let session;

const registreren = (req, res) => {
    res.render('register');
};

const register = async (req, res) => {
    console.log(req.body.name);
	const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const createUser = new User({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: hashedPassword
    });

    createUser.save((error) => {
        if (error) {
            console.error(error);
            return res.status(500).redirect('/register');
        } else {
            console.log("Account aangemaakt!")
            session = req.session;
            session.email = req.body.email;
            sendEmail().catch(console.error);
            return res.status(200).redirect('/');
        }
    });
};

async function sendEmail() {
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  
    let info = await transporter.sendMail({
      from: '"Matchflix" <hello@matchflix.com>',
      to: "test@example.com",
      subject: "Registratie voltooid | Matchflix",
      text: "Welkom bij Matchflix! Het registreren van je account is voltooid!",
      html: "<b>Welkom bij Matchflix! Het registreren van je account is voltooid!</b>",
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {
    registreren: registreren,
    register: register,
};