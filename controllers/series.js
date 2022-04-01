const fetch = require('node-fetch')
const mongoose = require('mongoose')
const User = require("../models/user");
const sessions = require('express-session');

let session ;



const series = async (req, res) => {
    
    session = req.session
    if(!session.email){
        await res.redirect('/')
    }else{
        User.update({email:session.email}, { $set: { shows: [] }}, function(err, affected){})
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
    if(!session.email){
        await res.redirect('/')
    }else{
        User.find({
            email: session.email
        })
        await res.redirect('/' )
    }
    console.log(session.email)

 
    if (req.body['the-flash'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-flash'
		    }}).lean().exec();
    }

    if (req.body['game-of-thrones'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'game-of-thrones'
		    }}).lean().exec();
    }

    if (req.body['arrow'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'arrow'
		    }}).lean().exec();
    }

    if (req.body['lucifer'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'lucifer'
		    }}).lean().exec();
    }
    
    if (req.body['supergirl'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'supergirl'
		    }}).lean().exec();
    }

    if (req.body['dcs-legends-of-tomorrow'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'dcs-legends-of-tomorrow'
		    }}).lean().exec();
    }
    
    if (req.body['the-walking-dead'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-walking-dead'
		    }}).lean().exec();
    }

    if (req.body['dragon-ball-super'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'dragon-ball-super'
		    }}).lean().exec();
    }
    
    if (req.body['montauk'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'montauk'
		    }}).lean().exec();
    }

    if (req.body['boku-no-hero-academia'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'boku-no-hero-academia'
		    }}).lean().exec();
    }
    
    if (req.body['the-100'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-100'
		    }}).lean().exec();
    }
    if (req.body['sherlock'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'sherlock'
		    }}).lean().exec();
    }
    
    if (req.body['supernatural'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'supernatural'
		    }}).lean().exec();
    }
    
    if (req.body['the-big-bang-theory'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-big-bang-theory'
		    }}).lean().exec();
    }
    
    if (req.body['marvel-s-agents-of-s-h-i-e-l-d'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'marvel-s-agents-of-s-h-i-e-l-d'
		    }}).lean().exec();
    }

        
    if (req.body['daredevil'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'daredevil'
		    }}).lean().exec();
    }

            
    if (req.body['vikings'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'vikings'
		    }}).lean().exec();
    }
    
    if (req.body['gotham'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'gotham'
		    }}).lean().exec();
    }

    if (req.body['westworld'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'westworld'
		    }}).lean().exec();
    }
    
    if (req.body['miraculous-ladybug'] == 'on'){
	    const addShows =  User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'miraculous-ladybug'
		    }}).lean().exec();
    }
}


module.exports = {
    series: series,
    seriesSubmit: seriesSubmit,
};

//https://www.episodate.com/api/most-popular?page=1
// https://www.episodate.com/api


