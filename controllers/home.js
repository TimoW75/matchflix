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
        }).then ((documents)  => {
            let name = documents.map(user => user.name);
            User.find({email: session.email}, async (err, shows) => {
                await res.render('home', {
                    shows: shows, // data doorgeven. Welke stijlen staan in de database
                    name: name,

                })
            })            
        })
    }
}


module.exports = {
    home: home,
};