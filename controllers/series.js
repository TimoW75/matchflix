const fetch = require('node-fetch')
const mongoose = require('mongoose')
const User = require("../models/user");
const sessions = require('express-session');

let session;



const series = async (req, res) => {

	session = req.session
	if (!session.email) {
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

	fetch('https://www.episodate.com/api/most-popular?page=1')
		.then(response => response.json())
		.then(series => {
			res.render('serieselect', series)
		});
}


const seriesSubmit = async (req, res) => {
	let serieCheck = 0; // variable voor het bekijken of er een stijl is aangeklikt

	session = req.session
	if (!session.email) {
		await res.redirect('/')
	} else {
		User.find({
			email: session.email
		})
		await res.redirect('/')
	}
	console.log(session.email);

	serieSelectList = [req.body.serieName];
	serieSelectList.forEach(show => {
		const addShows = User.findOneAndUpdate({
			email: session.email
		}, {
			$addToSet: {
				shows: show
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