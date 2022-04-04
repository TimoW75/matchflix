const User = require('../models/user');


let session;

const update = (req, res) => {
  session = req.session;
  if (!session.email) {
    res.redirect('/');
  } else {
    User.find({
      email: session.email
    }).then((documents) => {
      let name = documents.map(user => user.name);
      let age = documents.map(user => user.age);
      let gender = documents.map(user => user.gender);
      let email = documents.map(user => user.email);
      let about = documents.map(user => user.about);
      let shows = documents.map(user => user.shows);
      res.render('update', {
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
  User.updateOne({
    email: session.email
  }, {
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