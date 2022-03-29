const fetch = require('node-fetch')
const mongoose = require('mongoose')
const User = require("../models/user");
const sessions = require('express-session');

let session ;


// const series = (req, res) => {
//     serieModel.find({}, async (err, serie) => {
//         await res.render('serieselect',{
//             serieLijst:serie
//         })
//     })
// };

const series = (req, res) => {
    

    // session = req.session
    // if(!session.email){
    //     res.redirect('/')
    // }else{
    //     User.update({email:session.email}, { $set: { shows: [] }}, function(err, affected){
    //     console.log('affected: ', affected)
    //     })
    // }

    fetch('https://www.episodate.com/api/most-popular?page=1')
    .then(response => response.json())
    .then(series => {
    res.render('serieselect', series)
    });  
}


const seriesSubmit = async (req, res) => {
    let serieCheck = 0; // variable voor het bekijken of er een stijl is aangeklikt
    console.log(req.body['the-flash'])

    session = req.session
    if(!session.email){
        res.redirect('/')
    }else{
        User.find({
            email: session.email
        })
        res.redirect('/' )
    }
    console.log(session.email)

 

    if (req.body['the-flash'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-flash'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['game-of-thrones'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'game-of-thrones'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['arrow'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'arrow'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['lucifer'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'lucifer'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['supergirl'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'supergirl'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['dcs-legends-of-tomorrow'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'dcs-legends-of-tomorrow'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['the-walking-dead'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-walking-dead'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['dragon-ball-super'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'dragon-ball-super'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['montauk'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'montauk'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['boku-no-hero-academia'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'boku-no-hero-academia'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['the-100'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-100'
		    }}).lean().exec();
        console.log(addShows)
    }
    if (req.body['sherlock'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'sherlock'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['supernatural'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'supernatural'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['the-big-bang-theory'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'the-big-bang-theory'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['marvel-s-agents-of-s-h-i-e-l-d'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'marvel-s-agents-of-s-h-i-e-l-d'
		    }}).lean().exec();
        console.log(addShows)
    }

        
    if (req.body['daredevil'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'vikings'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['gotham'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'gotham'
		    }}).lean().exec();
        console.log(addShows)
    }

    if (req.body['westworld'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'westworld'
		    }}).lean().exec();
        console.log(addShows)
    }
    
    if (req.body['miraculous-ladybug'] == 'on'){
	    const addShows = await User.findOneAndUpdate({email: session.email}, {
		    $addToSet: {
			    shows: 'miraculous-ladybug'
		    }}).lean().exec();
        console.log(addShows)
    }
    
}


module.exports = {
    series: series,
    seriesSubmit: seriesSubmit,
};






//https://www.episodate.com/api/most-popular?page=1
// https://www.episodate.com/api


