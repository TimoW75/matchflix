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
					console.log("the same")
					res.redirect("match");
				} else {
				const name = result.name;
				const age = result.age;
				const about = result.about;
				console.log("good")
				res.render("match", {
					name: name,
					age: age,
					about: about,
				});
			}
			});
	});
};

module.exports = {
    matching: matching,
};
