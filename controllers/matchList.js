const { User } = require("../models");

let session;


const list = (req, res) => {
	session = req.session;
	if (!session.email) {
        console.log("Je moet ingelogd zijn om hier te kunnen komen.")
        res.redirect('/login')
    } else {
	
        res.render("matchlist")
};
};

module.exports = {
    list: list,
};
