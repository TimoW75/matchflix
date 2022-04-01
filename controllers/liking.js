const { User } = require("../models");

let session;


const like = async (req, res) => {
    console.log("like");
    session = req.session;
	const matchedPerson = await User.find({name: req.body.like});
	const addToMatches = await User.findOneAndUpdate({email: session.email}, {
		$addToSet: {
			matches: matchedPerson
		}}).lean().exec();
	// $addToSet will add the matched person's ObjectID to the "matches" list of the app User if it does not already exist in there.
    res.redirect("match");

}

const dislike = (req, res) => {
    console.log("dislike");
    res.redirect("match");
}


module.exports = {
    like: like,
    dislike: dislike,
};
