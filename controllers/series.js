const fetch = require('node-fetch')
const mongoose = require('mongoose')
const User = require("../models/user");
const sessions = require('express-session');

let session;

const series = async (req, res) => {

	session = req.session
	if (!session.email) { //make sure the user is logged in with a session
		await res.redirect('/')
	} else {
		User.update({
			email: session.email
		}, {
			$set: {
				shows: []
			}
		}, function (err, affected) {})
	}

	fetch('https://www.episodate.com/api/most-popular?page=1') //fetch the seriesdata
		.then(response => response.json())
		.then(series => {
			res.render('serieselect', series) //render the data to handlebars
		});
}


const seriesSubmit = async (req, res) => {

	session = req.session
	if (!session.email) {
		await res.redirect('/')
	} else {
		User.find({
			email: session.email
		})
		await res.redirect('/')
	}
	serieSelectList = [req.body['serie-name']]; //Get all series on the page
	console.log(serieSelectList)
	serieSelectList.forEach(show => {// for each selected show add it to the
		const addShows = User.findOneAndUpdate({
			email: session.email
		}, {
			$addToSet: {
				shows: show //add the show to the shows array in the database
			}
		}).lean().exec();
	});
}


module.exports = {
	series: series,
	seriesSubmit: seriesSubmit,
};

//https://www.episodate.com/api/most-popular?page=1
// https://www.episodate.com/api