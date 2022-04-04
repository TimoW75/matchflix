const User = require('../models/user');

let session;

const home = async (req, res) => {
    session = req.session
    if (!session.email) {
        console.log("Je moet ingelogd zijn om hier te kunnen komen.")
        res.redirect('/login')
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
            User.find({
                email: session.email
            }, async (err, shows) => {
                await res.render('home', {
                    name: name,
                    age: age,
                    gender: gender,
                    email: email,
                    about: about,
                    shows: shows
                })
            })
        })
    }
}


module.exports = {
    home: home,
};


