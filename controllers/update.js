const User = require('../models/user');

let session;

const update = (req, res) => {
  session = req.session;
  // Check of er een sessie is
  if (!session.email) {
    res.redirect('/');
  } else {
    User.find({
      email: session.email
    }).then((documents) => {
      // Laad de gegevens in om ze te laten zien in het scherm
      let name = documents.map(user => user.name);
      let age = documents.map(user => user.age);
      let gender = documents.map(user => user.gender);
      let email = documents.map(user => user.email);
      let about = documents.map(user => user.about);
      let shows = documents.map(user => user.shows);
      res.render('update', {
        // Laat deze gegevens zien 
        name: name,
        age: age,
        gender: gender,
        email: email,
        about: about,
        shows: shows
      })
    });
  }
}


const gewijzigd = async (req, res) => {
  session = req.session;
  // Haal gegevens uit database op basis van emailadres
  User.updateOne({
    email: session.email
  }, {
    // Geef deze gegevens weer om aan te passen
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
    about: req.body.about,
    shows: req.body.shows
  }).exec();
  session.email = req.body.email;
  res.redirect('/');
}

module.exports = {
  update: update,
  gewijzigd: gewijzigd,
}