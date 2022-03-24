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
            return res.status(200).redirect('/');
        }
    });
};

module.exports = {
    registreren: registreren,
    register: register,
};