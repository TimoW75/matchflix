const Gebruiker = require('../models/gebruikers');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let session;

const registreren = (req, res) => {
    res.render('register');
};

const register = async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.wachtwoord, saltRounds);
    const createUser = new Gebruiker({
        naam: req.body.naam,
        leeftijd: req.body.leeftijd,
        geslacht: req.body.geslacht,
        emailadres: req.body.emailadres,
        wachtwoord: hashedPassword
    });

    createUser.save((error) => {
        if (error) {
            console.error(error);
            return res.status(500).redirect('/register');
        } else {
            console.log("Account aangemaakt!")
            session = req.session;
            session.emailadres = req.body.emailadres;
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