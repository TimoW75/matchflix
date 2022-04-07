const User = require('../models/user');
const bcrypt = require('bcrypt');

let session;

// Renders the registration page when going to /register
const loginRender = (req, res) => {
  res.render('login');
};

// Login function (checks if email and password are correct & creates new session when logged in)
const loginFunction = async (req, res) => {
  try {
    // Searches for email in database    
    const getUser = await User.findOne({
      email: req.body.email
    });
    if (getUser) {
      // Compares filled in password with encrypted password in database
      const comparePassword = await bcrypt.compare(req.body.password, getUser.password);
      if (comparePassword) {
        console.log("Logged in successfully!");
        session = req.session;
        session.email = req.body.email;
        return res.status(200).redirect('/');
      } else {
        console.error("Wrong emailadress or password!");
        return res.status(404).redirect('/login');
      }
    } else {
      console.error("Wrong emailadress or password!");
      return res.status(404).redirect('/login');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).redirect('/login');
  }
};

module.exports = {
  loginRender: loginRender,
  loginFunction: loginFunction,
};