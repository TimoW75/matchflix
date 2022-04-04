const { User } = require("../models");

let session;


const matching = (req, res) => {
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
				if(session.email == result.email){
					res.redirect("match");
					// Checking if user doesn't match him/herself
				} else {
				res.render("match", {
					name: result.name,
					age: result.age,
					about: result.about,
				});
			}
			});
	});
	};
};


module.exports = {
    matching: matching,
};
