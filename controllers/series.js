const fetch = require('node-fetch')
const mongoose = require('mongoose')
const { User } = require("../models");



// const series = (req, res) => {
//     serieModel.find({}, async (err, serie) => {
//         await res.render('serieselect',{
//             serieLijst:serie
//         })
//     })
// };

const series = (req, res) => {
    fetch('https://www.episodate.com/api/most-popular?page=1')
    .then(response => response.json())
    .then(series => {
    res.render('serieselect', series)
    });   
};


const seriesSubmit = (req, res) => {
    let serieCheck = 0; // variable voor het bekijken of er een stijl is aangeklikt
    console.log(req.body['the-flash'])

    // userSchema.exists({shows:'The Flash'}, async  (err, doc) => { //zoeken voor serie flash in de database
    //     const flashExist = doc; // variable aanmaken 
    //     if(flashExist == null & req.body['the-flash'] =='on'){ // als de serie  nog niet in de database staat en als de checkbox aangeklikt is op submit
    //         console.log('flash added')
    //         await Flash.save(); // save de flash serie naar de database
    //         serieCheck++;
    //     }else{
    //         console.log('flash already in DB or not selected') // console log voor als de stijl al in de database staat of niet aangeklikt was
    //     }    
        
        if( req.body['the-flash'] == 'on'){
            $addToSet:{
                shows: the-flash
            }
        }
    res.render('serieselect' )
}


module.exports = {
    series: series,
    seriesSubmit: seriesSubmit,
};






//https://www.episodate.com/api/most-popular?page=1
// https://www.episodate.com/api



 


