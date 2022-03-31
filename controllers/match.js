const { User } = require("../models");

let session;


const matching = (req, res) => {
	session = req.session;
	console.log(session)
	console.log("email "+session.email)
    User.count().exec(function (err, count) {
		// Get a random entry
		const random = Math.floor(Math.random() * count);
		// Again query all users but only fetch one offset by our random #
		User.findOne().skip(random).exec(
			function (err, result) {
				if(session.email == result.email){
					res.redirect("match");
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

const liking = (req, res) =>{

}

module.exports = {
    matching: matching,
};
