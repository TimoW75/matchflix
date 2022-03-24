const fetch = require('node-fetch')
const mongoose = require('mongoose')


const serieSchema = new mongoose.Schema({  // nieuw model voor alle stijlen
    serieName: String,  
    serieImg: String,
});

const serieModel = mongoose.model('serie', serieSchema) // maak een model aan voor de stijlen

const Flash = new serieModel({ serieName: 'The Flash' , serieImg: 'https://static.episodate.com/images/tv-show/thumbnail/35624.jpg'});


const series = (req, res) => {
    serieModel.find({}, async (err, serie) => {
        await res.render('serieselect',{
            serieLijst:serie
        })
    })
};

const seriesSubmit = (req, res) => {

    let serieCheck = 0; // variable voor het bekijken of er een stijl is aangeklikt

    serieModel.exists({serieName:'The Flash'}, async  (err, doc) => { //zoeken voor style urban in de database
        const flashExist = doc; // variable aanmaken 
        console.log(req.body.flash)
        if(flashExist == null & req.body.flash =='on'){ // als de style nog niet in de database staat en als de checkbox aangeklikt is op submit
            console.log('flash added')
            await Flash.save(); // save de urban style naar de database
            serieCheck++;
        }else{
            console.log('flash already in DB or not selected') // console log voor als de stijl al in de database staat of niet aangeklikt was
        }    
    });

    res.render('serieselect' )
}


module.exports = {
    series: series,
    seriesSubmit: seriesSubmit,
};


//https://www.episodate.com/api/most-popular?page=1
// https://www.episodate.com/api

    //  fetch('https://www.episodate.com/api/most-popular?page=1')
    // .then(response => response.json())
    // .then(series => console.log(series));

 


