const { User } = require("../models");

let session;


const chat = (req, res) => {
	session = req.session;
	if (!session.email) {
        console.log("Je moet ingelogd zijn om hier te kunnen komen.")
        res.redirect('/login')
    } else {
	
    User.count().exec(function (err, count) {
		// Get a random entry
		const random = Math.floor(Math.random() * count);
		// Again query all users but only fetch one offset by the random entry
		User.findOne().skip(random).exec(
			function (err, result) {
				console.log(result.shows)
				if(session.email == result.email){
					res.redirect("chat");
					// Checking if user doesn't match him/herself
				} else {
				res.render("chat", {
					name: result.name
				});
			}
			});
	});
	};
};


module.exports = {
    chat: chat,
};