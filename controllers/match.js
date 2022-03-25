const { User } = require("../models");

const matching = (req, res) => {

    User.count().exec(function (err, count) {
		// Get a random entry
		const random = Math.floor(Math.random() * count);
		// Again query all users but only fetch one offset by our random #
		User.findOne().skip(random).exec(
			function (err, result) {
				const name = result.name;
				const age = result.age;
				const about = result.about;
				res.render("match", {
					name: name,
					age: age,
					about: about,
				});
			});
	});
};

module.exports = {
    matching: matching,
};
