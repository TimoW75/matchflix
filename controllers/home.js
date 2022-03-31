const User = require('../models/user');

let session;

const home = (req, res) => {
    session = req.session
    if (!session.email) {
        console.log("Je moet ingelogd zijn om hier te kunnen komen.")
        res.redirect('/login')
    } else {
        User.find({
            email: session.email
        }).then((documents) => {
            let name = documents.map(user => user.name);
            let shows = documents.map(user => user.shows);
            res.render('home', {
                name: name,
                shows: shows
            });
        })
    }
}


module.exports = {
    home: home,
};