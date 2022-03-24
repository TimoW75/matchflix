//const model = require('../models');
let session;

const home = (req, res) => {
    session = req.session
    if (!session.emailadres) {
        console.log("Je moet ingelogd zijn om hier te kunnen komen.")
        res.redirect('/login')
    } else {
        res.render('home');
    }
};


module.exports = {
    home: home,
};
