const User = require('../models/user');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const saltRounds = 10;

let session;

const inloggen = (req, res) => {
    res.render('login');
};

const login = async (req, res) => {
	try {
        const getUser = await User.findOne({ emailadres: req.body.email });
        if (getUser) {
          const comparePassword = await bcrypt.compare(req.body.password, getUser.password);
          if (comparePassword) {
            console.log("Succesvol ingelogd!");
            session = req.session;
            session.emailadres = req.body.email;
            return res.status(200).redirect('/');
          } else {
            console.error("Verkeerde gebruikersnaam of wachtwoord!");
            return res.status(404).redirect('/login');
          }
        } else {
            console.error("Verkeerde gebruikersnaam of wachtwoord!");
            return res.status(404).redirect('/login');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).redirect('/login');
    }
};

module.exports = {
    inloggen: inloggen,
    login: login,
};
